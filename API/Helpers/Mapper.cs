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
        // private static string BaseUrlProduct = "http://localhost:5001/images/shop/";
        private static string BaseUrlAbout = "http://localhost:5001/images/about/";
        // private static string BaseUrlBlog = "http://localhost:5001/images/blog/";


        public Mapper()
        {
            CreateMap<Core.Entities.Identity.Address, AddressDto>().ReverseMap();
            
            CreateMap<CustomerBasketDto, CustomerBasket>();
            
            CreateMap<CustomerWishlistDto, CustomerWishlist>();
            
            CreateMap<BasketItemDto, BasketItem>();

            CreateMap<WishlistItemDto, WishlistItem>();
            
            CreateMap<AddressDto, Core.Entities.OrderAggregate.Address>();

            CreateMap<ProductCreateDto, Product>();
            
            CreateMap<ProductUpdateDto, Product>();

            CreateMap<ContactCreateDto, Contact>();

            CreateMap<BlogCreateDto,Blog>();
            
            CreateMap<BlogUpdateDto, Blog>();

            CreateMap<BrandReturnDto, ProductBrand>();

            CreateMap<BrandCreateDto,ProductBrand>();

            CreateMap<About, AboutReturnDto>()
                .ForMember(x => x.PhotoUrl, o => o.MapFrom(x => BaseUrlAbout+x.PhotoUrl));

            CreateMap<Order, OrderToReturnDto>()
                .ForMember(d => d.DeliveryMethod, o => o.MapFrom(s => s.DeliveryMethod.ShortName))
                .ForMember(d => d.ShippingPrice, o => o.MapFrom(s => s.DeliveryMethod.Price));

            CreateMap<Blog, BlogReturnDto>()
                .ForMember(x => x.Comments, o => o.MapFrom(x => x.Comments.Select(x => x.Context)))
                .ForMember(d => d.PhotoUrl, x => x.MapFrom<BlogUrlResolver>());
            
            CreateMap<Comment, CommentReturnDto>()
                .ForMember(x => x.Blog , o => o.MapFrom(x => x.Blog.Title))
                .ForMember(x => x.User , o => o.MapFrom(x => x.User.UserName));;

            CreateMap<Product, ProductReturnDto>()
                .ForMember(d => d.ProductBrand, x => x.MapFrom(b => b.ProductBrand.Name))
                .ForMember(d => d.ProductType, x => x.MapFrom(b => b.ProductType.Name))
                .ForMember(d => d.ProductSize, x => x.MapFrom(b => b.ProductSize.Name))
                .ForMember(d => d.ProductColor, x => x.MapFrom(b => b.ProductColor.Name))
                .ForMember(d => d.PhotoUrl, x => x.MapFrom<ProductUrlResolver>());
            
            CreateMap<OrderItem, OrderItemDto>()
                .ForMember(d => d.ProductId, o => o.MapFrom(s => s.ItemOrdered.ProductItemId))
                .ForMember(d => d.ProductName, o => o.MapFrom(s => s.ItemOrdered.ProductName))
                .ForMember(d => d.PhotoUrl, o => o.MapFrom(s => s.ItemOrdered.PhotoUrl))
                .ForMember(d => d.PhotoUrl, o => o.MapFrom<OrderItemUrlResolver>()); 
        }
    }
}