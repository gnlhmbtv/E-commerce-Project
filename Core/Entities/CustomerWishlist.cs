using System.Collections.Generic;

namespace Core.Entities
{
    public class CustomerWishlist
    {
        public CustomerWishlist()
        {
            
        }

        public CustomerWishlist(string id) 
        {
            Id = id;
               
        }
        public string Id { get; set; }
        public List<WishlistItem> Items { get; set; } = new List<WishlistItem>();
    }
}