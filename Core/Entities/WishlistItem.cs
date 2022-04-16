namespace Core.Entities
{
    public class WishlistItem
    {
         public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string PhotoUrl { get; set; }
        public string Brand { get; set; }
        public string Type { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
    }
}