using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.api.Models
{
    public class Questionnaire
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Options { get; set; }
    }
}
