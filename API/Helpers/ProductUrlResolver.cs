using API.Dto;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ProductUrlResolver : IValueResolver<Product, ProductReturnDto, string>
    {
        private readonly IConfiguration _config;
        public ProductUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Product source, ProductReturnDto destination, string destMember, ResolutionContext context)
        {
            if(!string.IsNullOrEmpty(source.PhotoUrl))
            {
                // return _config["ApiUrl" ] + source.PhotoUrl;
                return _config["ApiUrl" ] + "images/" + "products/" + source.PhotoUrl;
            }
            return null;
        }
    }
}