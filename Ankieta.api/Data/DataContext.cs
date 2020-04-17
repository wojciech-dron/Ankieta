using Ankieta.api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ankieta.api.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Questionnaire> Questionnaires { get; set; }
        public DbSet<Vote> Votes { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    }
}
