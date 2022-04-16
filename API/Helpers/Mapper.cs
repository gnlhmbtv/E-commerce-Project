using System.Linq;
using API.Dto;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;
using Core.Entities.OrderAggregate;

namespace API.Helpers
{
    public class Mapper : Profile
    {
        // private static string BaseUrlProduct = "http://localhost:5000/images/shop/";
        private static string BaseUrlAbout = "http://localhost:5001/images/about/";
        private static string BaseUrlBlog = "http://localhost:5001/images/blog/";


        public Mapper()
        {
            CreateMap<Product, ProductReturnDto>()
                .ForMember(d => d.ProductBrand, x => x.MapFrom(b => b.ProductBrand.Name))
                .ForMember(d => d.ProductType, x => x.MapFrom(b => b.ProductType.Name))
                .ForMember(d => d.PhotoUrl, x => x.MapFrom<ProductUrlResolver>());
            CreateMap<Core.Entities.Identity.Address, AddressDto>().ReverseMap();
            CreateMap<CustomerBasketDto, CustomerBasket>();
            CreateMap<BasketItemDto, BasketItem>();
            CreateMap<AddressDto, Core.Entities.OrderAggregate.Address>();
            CreateMap<Order, OrderToReturnDto>()
                .ForMember(d => d.DeliveryMethod, o => o.MapFrom(s => s.DeliveryMethod.ShortName))
                .ForMember(d => d.ShippingPrice, o => o.MapFrom(s => s.DeliveryMethod.Price));
            CreateMap<OrderItem, OrderItemDto>()
                .ForMember(d => d.ProductId, o => o.MapFrom(s => s.ItemOrdered.ProductItemId))
                .ForMember(d => d.ProductName, o => o.MapFrom(s => s.ItemOrdered.ProductName))
                .ForMember(d => d.PhotoUrl, o => o.MapFrom(s => s.ItemOrdered.PhotoUrl))
                .ForMember(d => d.PhotoUrl, o => o.MapFrom<OrderItemUrlResolver>()); 
            CreateMap<ProductCreateDto, Product>();
            CreateMap<ProductUpdateDto, Product>();
            CreateMap<About, AboutReturnDto>()
                .ForMember(x => x.PhotoUrl, o => o.MapFrom(x => BaseUrlAbout+x.PhotoUrl));
            CreateMap<ContactCreateDto, Contact>();
            CreateMap<Blog, BlogReturnDto>()
                .ForMember(x => x.Comments
                    , o =>
                        o.MapFrom(x => x.Comments.Select(x => x.Context)))
                .ForMember(x => x.PhotoUrl
                    , o =>
                        o.MapFrom(x => BaseUrlBlog+x.PhotoUrl));
            CreateMap<Comment, CommentReturnDto>()
                .ForMember(x => x.Blog
                    , o =>
                        o.MapFrom(x => x.Blog.Title))
                .ForMember(x => x.User
                    , o =>
                        o.MapFrom(x => x.User.UserName));;
            CreateMap<BlogCreateDto,Blog>();
            CreateMap<BlogUpdateDto, Blog>();
            // CreateMap<Product,ProductReturnDto>()
            //     .ForMember(x => x.ProductType
            //         , o =>
            //             o.MapFrom(x => x.ProductType.Name))
            //     .ForMember(x => x.ProductBrand
            //         , o =>
            //             o.MapFrom(x => x.ProductBrand.Name))
            //     .ForMember(x => x.PhotoUrl
            //         , o =>
            //             o.MapFrom(x => BaseUrlProduct + x.PhotoUrl));
            //  CreateMap<About, AboutReturnDto>()
            //     .ForMember(x => x.PhotoUrl
            //         , o =>
            //             o.MapFrom(x => BaseUrlAbout+x.PhotoUrl));
        }
    }
}