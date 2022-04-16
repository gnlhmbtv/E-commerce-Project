using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IBrandRepository
    {
        Task<ProductBrand> GetBrandByIdAsync(int id);
        Task<IReadOnlyList<ProductBrand>> GetBrandsAsync();
        Task<ProductBrand> CreateBrandAsync(ProductBrand brand);
        Task<ProductBrand> DeleteBrandAsync(int id);
    }
}