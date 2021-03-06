using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace Core.Entities
{
    public class Product : BaseEntity
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public string PhotoUrl { get; set; }
        [NotMapped]
        public IFormFile Photo { get; set; }
        public ProductType ProductType { get; set; }
        public int ProductTypeId { get; set; }
        public ProductBrand ProductBrand { get; set; }
        public int ProductBrandId { get; set; }
        public ProductSize ProductSize { get; set; }
        public int ProductSizeId { get; set; }
        public ProductColor ProductColor { get; set; }
        public int ProductColorId { get; set; }
    }
    
}