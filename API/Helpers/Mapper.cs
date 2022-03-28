using API.Dto;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;

namespace API.Helpers
{
    public class Mapper : Profile
    {
        public Mapper()
        {
            CreateMap<Product, ProductReturnDto>()
                .ForMember(d => d.ProductBrand, x => x.MapFrom(b => b.ProductBrand.Name))
                .ForMember(d => d.ProductType, x => x.MapFrom(b => b.ProductType.Name))
                .ForMember(d => d.PhotoUrl, x => x.MapFrom<ProductUrlResolver>());
            CreateMap<Address, AddressDto>().ReverseMap();
        }
    }
}