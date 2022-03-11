using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dto;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IGenericRepository<ProductBrand> _productBrandRepository;
        private readonly IGenericRepository<ProductType> _productTypeRepository;
        private readonly IGenericRepository<Product> _productsRepository;

        public ProductsController(IGenericRepository<Product> productsRepository,
        IGenericRepository<ProductBrand> productBrandRepository,
        IGenericRepository<ProductType> productTypeRepository)
        {
            _productTypeRepository = productTypeRepository;
            _productBrandRepository = productBrandRepository;
            _productsRepository = productsRepository;

        }

        [HttpGet]
        public async Task<ActionResult<List<ProductReturnDto>>> GetProducts()
        {
            var spec = new ProductsWithTypesAndBrandsSpecification();

            var products = await _productsRepository.ListAsync(spec);
            
            return products.Select(p => new ProductReturnDto
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                PhotoUrl = p.PhotoUrl,
                Description = p.Description,
                ProductBrand = p.ProductBrand.Name,
                ProductType = p.ProductType.Name
            }).ToList();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductReturnDto>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product =  await _productsRepository.GetEntityWithSpec(spec);

            return new ProductReturnDto
            {
                Id = product.Id,
                Name = product.Name,
                PhotoUrl = product.PhotoUrl,
                ProductBrand = product.ProductBrand.Name,
                ProductType = product.ProductType.Name,
                Description = product.Description,
                Price = product.Price
            };
        }
        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _productBrandRepository.ListAllAsync());
        }
        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _productTypeRepository.ListAllAsync());
        }
    }
}