using System.Collections.Generic;

namespace Core.Entities
{
    public class Color 
    {
        public int ColorId { get; set; }
        public string ColorName { get; set; }
        public ICollection<ProductColor> ProductColor { get; set; }
    }
}