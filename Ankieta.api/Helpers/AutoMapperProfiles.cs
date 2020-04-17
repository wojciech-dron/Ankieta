using Angular.api.Models;
using Ankieta.api.Dtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ankieta.api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<QuestToCreateDTO, Questionnaire>();
            CreateMap<AnswerToCreateDTO, Answer>();
            CreateMap<Questionnaire, QuestToReturnDTO>();
            CreateMap<Answer, AnswerToReturnDTO>();
        }
    }
}
