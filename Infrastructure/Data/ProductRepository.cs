using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _context;
        public ProductRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Product> CreateProductAsync(Product product)
        {
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
            return product;
        }

        public async Task<Product> UpdateProductAsync(Product product,string webRoot)
        {
            var dbProduct =await _context.Products.FirstOrDefaultAsync(x => x.Id == product.Id);
            if (dbProduct == null)
            {
                return dbProduct;
            }
            
            string folderName = Path.Combine("images", "products");
            if (product.PhotoUrl!=null)
            {   
                ImageExtensionn.DeleteImagee(webRoot,folderName,dbProduct.PhotoUrl);
                string fileName = await product.Photo.SaveImgg(webRoot, folderName);
                dbProduct.PhotoUrl = fileName;
            }
            dbProduct.Name = product.Name;
            dbProduct.Price = product.Price;
            dbProduct.Description = product.Description;
            dbProduct.ProductBrandId = product.ProductBrandId;
            dbProduct.ProductTypeId = product.ProductTypeId;
            // dbProduct.ProductSize = product.ProductSize;
            await _context.SaveChangesAsync();
            return dbProduct;
        }

         public async Task<Product> DeleteProductAsync(int id,string webRoot)
        {
            var dbProduct = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (dbProduct == null)
            {
                return dbProduct;
            }
            
            string folderName = Path.Combine("images", "shop");

            ImageExtensionn.DeleteImagee(webRoot,folderName,dbProduct.PhotoUrl);
            await _context.SaveChangesAsync();
            
            _context.Products.Remove(dbProduct);
            
            
            return dbProduct;
        }

        public async Task<IReadOnlyList<ProductBrand>> GetProductBrandAsync()
        {
            return await _context.ProductBrands.ToListAsync();
        }

        // public async Task<IReadOnlyList<Size>> GetProductSizeAsync()
        // {
        //     return await _context.Sizes.ToListAsync();
        // }

        // public async Task<IReadOnlyList<Color>> GetProductColorAsync()
        // {
        //     return await _context.Colors.ToListAsync();
        // }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Products.Include(p => p.ProductType).Include(p => p.ProductBrand).FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            return await _context.Products.Include(p => p.ProductType).Include(p => p.ProductBrand).ToListAsync();
        }

        public async Task<IReadOnlyList<ProductType>> GetProductTypeAsync()
        {
            return await _context.ProductTypes.ToListAsync();
        }
    }
}