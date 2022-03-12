using Core.Entities;

namespace Core.Specifications
{
    public class ProductFilterCountSpecification : BaseSpecification<Product>
    {
        public ProductFilterCountSpecification(ProductSpecificationParams productParams)
        :base(x => 
                (!productParams.BrandId.HasValue || x.ProductBrandId == productParams.BrandId) && 
                (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)
            )
        {
        }
    }
}