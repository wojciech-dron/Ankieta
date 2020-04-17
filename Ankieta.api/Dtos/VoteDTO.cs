using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ankieta.api.Dtos
{
    public class VoteDTO
    {
        public int AnswerId { get; set; }
        public string Nick { get; set; }
    }
}
