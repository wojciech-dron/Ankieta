using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.api.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public int QuestionnaireId { get; set; }
        public string Content { get; set; }
        public ICollection<User> Users { get; set; }
    }
}
