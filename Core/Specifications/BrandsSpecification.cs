using Core.Entities;

namespace Core.Specifications
{
    public class BrandsSpecification : BaseSpecification<ProductBrand>
    {
         public BrandsSpecification(BrandSpecificationParams brandParams)
            :base(x => 
                (string.IsNullOrEmpty(brandParams.Search) || x.Name.ToLower().Contains(brandParams.Search))
            )
            {
                Paging(brandParams.PageSize * (brandParams.PageIndex - 1), brandParams.PageSize);
            }

            public BrandsSpecification(int id) : base(x => x.Id == id)
        {
        }
    }
}