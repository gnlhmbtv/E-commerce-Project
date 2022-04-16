using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class BrandRepository : IBrandRepository
    {
        private readonly DataContext _context;
        public BrandRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<ProductBrand> CreateBrandAsync(ProductBrand brand)
        {
           await _context.ProductBrands.AddAsync(brand); 
            await _context.SaveChangesAsync();
            return brand;
        }

        public async Task<ProductBrand> DeleteBrandAsync(int id)
        {
            var dbBrand =await _context.ProductBrands.FirstOrDefaultAsync(b => b.Id == id);
            if (dbBrand == null) return dbBrand;
            
            
            _context.ProductBrands.Remove(dbBrand);
            await _context.SaveChangesAsync();
            return dbBrand;
        }

        public async Task<ProductBrand> GetBrandByIdAsync(int id)
        {
            var brand = await _context.ProductBrands.FirstOrDefaultAsync(b => b.Id == id);
            return brand;
        }

        public async Task<IReadOnlyList<ProductBrand>> GetBrandsAsync()
        {
            var brands = await _context.ProductBrands.ToListAsync();
            return brands;
        }
    }
}