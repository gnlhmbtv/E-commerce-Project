using System.Threading.Tasks;
using API.Dto;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class WishlistController : BaseApiController
    {
        private readonly IWishlistRepository _wishlistRepository;
        private readonly IMapper _mapper;
        public WishlistController(IWishlistRepository wishlistRepository, IMapper mapper)
        {
            _mapper = mapper;
            _wishlistRepository = wishlistRepository;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerWishlist>> GetWishlistById(string id)
        {
            var wishlist = await _wishlistRepository.GetWishlistAsync(id);

            return Ok(wishlist ?? new CustomerWishlist(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerWishlist>> UpdateWishlist(CustomerWishlistDto wishlist)
        {
            var customerWishlist = _mapper.Map<CustomerWishlistDto, CustomerWishlist>(wishlist);

            var updateWishlist = await _wishlistRepository.UpdateWishlistAsync(customerWishlist);

            return Ok(updateWishlist);
        }

        [HttpDelete]
        public async Task DeleteWishlistAsync(string id)
        {
            await _wishlistRepository.DeleteWishlistAsync(id);
        }
    }
}