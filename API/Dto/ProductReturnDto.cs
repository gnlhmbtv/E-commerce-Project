namespace API.Dto
{
    public class ProductReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PhotoUrl { get; set; }
        public string ProductType { get; set; }
        public string ProductBrand { get; set; }
    }
}