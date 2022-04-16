using Core.Entities;

namespace Core.Specifications
{
    public class BrandFilterCountSpecification : BaseSpecification<ProductBrand>
    {
        public BrandFilterCountSpecification(BrandSpecificationParams brandParams) : base(x => 
            (string.IsNullOrEmpty(brandParams.Search) || x.Name.ToLower().Contains(brandParams.Search)))
           
        {
        }
    }
}