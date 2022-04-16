namespace Core.Entities.OrderAggregate
{
    public class ProductItemOrdered
    {
        public ProductItemOrdered()
        {

        }
        
        public ProductItemOrdered(int productItemId, string productName, string photoUrl) 
        {
            ProductItemId = productItemId;
            ProductName = productName;
            PhotoUrl = photoUrl;
               
        }
        public int ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string PhotoUrl { get; set; }
    }
}