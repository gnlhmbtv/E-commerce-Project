using Core.Entities;

namespace Core.Specifications
{
    public class ProductFilterCountSpecification : BaseSpecification<Product>
    {
        public ProductFilterCountSpecification(ProductSpecificationParams productParams) : base(x => 
            (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
            (!productParams.BrandId.HasValue || x.ProductBrandId == productParams.BrandId) &&
            (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId) &&
            (!productParams.SizeId.HasValue || x.ProductSizeId == productParams.SizeId) &&
            (!productParams.ColorId.HasValue || x.ProductColorId == productParams.ColorId))
           
        {
        }
    }
}