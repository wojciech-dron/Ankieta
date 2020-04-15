using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ankieta.api.Dtos
{
    public class QuestToCreateDTO
    {
        public string Title { get; set; }
        public string Time { get; set; }
        public ICollection<AnswerToCreateDTO> Answers { get; set; }
    }
}
