using System;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Data
{
    public class WishlistRepository : IWishlistRepository
    {
        private readonly IDatabase _database;
        public WishlistRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }
        public async Task<bool> DeleteWishlistAsync(string wishlistId)
        {
            return await _database.KeyDeleteAsync(wishlistId);
        }

        public async Task<CustomerWishlist> GetWishlistAsync(string wishlistId)
        {
            var data = await _database.StringGetAsync(wishlistId);

            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerWishlist>(data);
        }

        public async Task<CustomerWishlist> UpdateWishlistAsync(CustomerWishlist wishlist)
        {
            var created = await _database.StringSetAsync(wishlist.Id, JsonSerializer.Serialize(wishlist),
            TimeSpan.FromDays(30));

            if(!created) return null;

            return await GetWishlistAsync(wishlist.Id);
        }
    }
}