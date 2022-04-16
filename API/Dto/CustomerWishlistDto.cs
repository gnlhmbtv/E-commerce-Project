using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Dto
{
    public class CustomerWishlistDto
    {
        [Required]
        public string Id { get; set; }
        public List<WishlistItemDto> Items { get; set; }
    }
}