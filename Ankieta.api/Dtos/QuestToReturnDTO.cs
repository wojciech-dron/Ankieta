using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ankieta.api.Dtos
{
    public class QuestToReturnDTO
    {
        public string Title { get; set; }
        public DateTime ExpirationAt { get; set; }
        public ICollection<AnswerToReturnDTO> Answers { get; set; }
    }
}
