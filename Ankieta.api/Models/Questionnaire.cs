using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ankieta.api.Models
{
    public class Questionnaire
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime ExpirationAt { get; set; }
        public ICollection<Answer> Answers { get; set; }
    }
}
