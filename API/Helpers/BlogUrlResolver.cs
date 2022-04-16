using API.Dto;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class BlogUrlResolver : IValueResolver<Blog, BlogReturnDto, string>
    {
        private readonly IConfiguration _config;
        public BlogUrlResolver(IConfiguration config)
        {
            _config = config;
        }
        public string Resolve(Blog source, BlogReturnDto destination, string destMember, ResolutionContext context)
        {
             if(!string.IsNullOrEmpty(source.PhotoUrl))
            {
                // return _config["ApiUrl" ] + source.PhotoUrl;
                return _config["ApiUrl" ] + "images/" + "blogs/" + source.PhotoUrl;
            }
            return null;
        }
    }
}