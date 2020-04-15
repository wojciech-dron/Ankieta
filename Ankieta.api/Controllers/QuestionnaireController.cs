using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular.api.Data;
using Angular.api.Models;
using Ankieta.api.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace Ankieta.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionnaireController : ControllerBase
    {
        private readonly DataContext _context;

        public QuestionnaireController(DataContext context)
        {
            _context = context;
        }

        ////http://localhost:55921/api/questionnaire/create
        //[HttpPost("create")]
        //public IActionResult Create()
        //{
        //    return Ok();
        //}

        //http://localhost:55921/api/questionnaire/create
        [HttpPost("create")]
        public IActionResult Create(QuestToCreateDTO questionnaire)
        {

            return Ok(questionnaire);
        }
    }
}