using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular.api.Data;
using Microsoft.AspNetCore.Mvc;

namespace Ankieta.api.Controllers
{
    public class QuestionnaireController : Controller
    {
        private readonly DataContext _context;

        public QuestionnaireController(DataContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}