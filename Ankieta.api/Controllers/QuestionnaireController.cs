using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ankieta.api.Data;
using Ankieta.api.Dtos;
using Ankieta.api.Models;
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
        public async Task<IActionResult> GetQuestion(int id)
        {
            var questFromRepo = await _qRepo.GetQuestionnaire(id);

            if (questFromRepo == null)
                return BadRequest("Nie ma takiej ankiety.");

            var questToReturn = _mapper.Map<QuestToReturnDTO>(questFromRepo);
            questToReturn.IsActive = questFromRepo.ExpirationAt > DateTime.Now ? true : false;

            return Ok(questToReturn);
        }

        //http://localhost:55921/api/questionnaire
        [HttpGet]
        public async Task<IActionResult> GetQuestions()
        {
            var questsFromRepo = await _qRepo.GetQuestionnaires();

            if (questsFromRepo == null)
                return BadRequest("Brak ankiet");

            var questsToReturn = _mapper.Map<IEnumerable<QuestionsToReturnDTO>>(questsFromRepo);

            foreach (var quest in questsToReturn)
            {
                quest.IsActive = quest.ExpirationAt > DateTime.Now ? true : false;
            }

            return Ok(questsToReturn);
        }

        //http://localhost:55921/api/questionnaire/vote
        [HttpPost("vote")]
        public async Task<IActionResult> Vote(VoteDTO vote)
        {
            var answerFromRepo = await _qRepo.GetAnswer(vote.AnswerId);

            if (answerFromRepo == null)
                return BadRequest("Nie ma takiej odpowiedzi.");

            var voteToCreate = _mapper.Map<Vote>(vote);

            answerFromRepo.Votes.Add(voteToCreate);

            if (await _qRepo.SaveAll())
                return Ok();

            throw new Exception($"Nie można dodać pytań");
        }

        //http://localhost:55921/api/questionnaire/create
        [HttpPost("create")]
        public async Task<IActionResult> Create(QuestToCreateDTO questionnaire)
        {
            var questionnaireToCreate = _mapper.Map<Questionnaire>(questionnaire);
            questionnaireToCreate.ExpirationAt = DateTime.Now.AddMinutes(questionnaire.Time);

            _qRepo.Add(questionnaireToCreate);

            if (await _qRepo.SaveAll())
                return Ok(questionnaireToCreate.Id);

            throw new Exception($"Nie można utworzyć nowej ankiety");
        }
    }
}