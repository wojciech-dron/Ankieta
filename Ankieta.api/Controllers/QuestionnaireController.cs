using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular.api.Data;
using Angular.api.Models;
using Ankieta.api.Data;
using Ankieta.api.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Ankieta.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionnaireController : ControllerBase
    {
        private readonly QRepository _qRepo;
        private readonly IMapper _mapper;

        public QuestionnaireController(QRepository qRepo,
            IMapper mapper)
        {
            _qRepo = qRepo;
            _mapper = mapper;
        }

        //http://localhost:55921/api/questionnaire/2
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var questFromRepo = await _qRepo.GetQuestionnaire(id);

            if (questFromRepo == null)
            {
                return BadRequest("Nie ma takiej ankiety.");
            }

            var questToReturn = _mapper.Map<QuestToReturnDTO>(questFromRepo);

            foreach (var answer in questToReturn.Answers)
            {
                answer.Votes = 0;
            }

            return Ok(questToReturn);
        }

        //http://localhost:55921/api/questionnaire/create
        [HttpPost("create")]
        public async Task<IActionResult> Create(QuestToCreateDTO questionnaire)
        {
            var questionnaireToCreate = _mapper.Map<Questionnaire>(questionnaire);
            questionnaireToCreate.ExpirationAt = DateTime.Now.AddMinutes(questionnaire.Time);
            _qRepo.Add(questionnaireToCreate);

            if (await _qRepo.SaveAll())
            {
                foreach (var answer in questionnaireToCreate.Answers)
                {
                    answer.QuestionnaireId = questionnaireToCreate.Id;
                }

                if (await _qRepo.SaveAll())
                    return NoContent();

                throw new Exception($"Nie można dodać pytań");
            }

            throw new Exception($"Nie można utworzyć nowej ankiety");
        }
    }
}