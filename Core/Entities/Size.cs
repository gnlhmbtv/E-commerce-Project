using System.Collections.Generic;

namespace Core.Entities
{
    public class Size
    {
        public int SizeId { get; set; }
        public string SizeName { get; set; }
        public ICollection<ProductSize> ProductSize { get; set; }

    }
}