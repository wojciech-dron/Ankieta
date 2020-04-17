using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ankieta.api.Models
{
    public class Vote
    {
        public int Id { get; set; }
        public int AnswerId { get; set; }
        public string Nick { get; set; }
    }
}
