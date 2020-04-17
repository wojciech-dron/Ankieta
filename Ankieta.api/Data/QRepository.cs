using Ankieta.api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ankieta.api.Data
{
    public class QRepository
    {
        private readonly DataContext _context;

        public QRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public async Task<Questionnaire> GetQuestionnaire(int id)
        {
            return await _context
                .Questionnaires
                .Include(q => q.Answers)
                .ThenInclude(a => a.Votes)
                .FirstOrDefaultAsync(q => q.Id == id);
        }

        public async Task<Answer> GetAnswer(int id)
        {
            return await _context
                .Answers
                .Include(a => a.Votes)
                .FirstOrDefaultAsync(q => q.Id == id);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
