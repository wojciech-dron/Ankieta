using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ankieta.api.Dtos
{
    public class QuestToReturnDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool IsActive { get; set; }
        public ICollection<AnswerToReturnDTO> Answers { get; set; }
    }
}
