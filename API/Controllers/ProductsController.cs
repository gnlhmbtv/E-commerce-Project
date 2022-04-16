using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using API.Dto;
using API.Errors;
using API.Extensions;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly IGenericRepository<ProductBrand> _productBrandRepository;
        private readonly IGenericRepository<ProductType> _productTypeRepository;
        private readonly IGenericRepository<ProductSize> _productSizeRepository;
        private readonly IGenericRepository<ProductColor> _productColorRepository;
        private readonly IGenericRepository<Product> _productsRepository;
        private readonly IProductRepository _productRepository;
    
        private readonly IMapper _mapper;
        private readonly IWebHostEnvironment _env;
        private readonly DataContext _context;


        public ProductsController(IGenericRepository<Product> productsRepository,
        IGenericRepository<ProductBrand> productBrandRepository,
        IGenericRepository<ProductType> productTypeRepository,
        IGenericRepository<ProductSize> productSizeRepository,
        IGenericRepository<ProductColor> productColorRepository,
        IMapper mapper,
        IProductRepository productRepository,
        IWebHostEnvironment env,
        DataContext context)
        {
             _productRepository=productRepository;
            _productTypeRepository = productTypeRepository;
            _productBrandRepository = productBrandRepository;
            _productSizeRepository = productSizeRepository;
            _productColorRepository = productColorRepository;
            _productsRepository = productsRepository;
            _mapper = mapper;
            _env = env;
            _context = context;

        }

        [HttpGet]
        public async Task<ActionResult<Pagination<ProductReturnDto>>> GetProducts(
            [FromQuery]ProductSpecificationParams productParams)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(productParams);

            var countSpec = new ProductFilterCountSpecification(productParams);

            var totalItems = await _productsRepository.CountAsync(countSpec);

            var products = await _productsRepository.ListAsync(spec);

            var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductReturnDto>>(products);
            
            return Ok(new Pagination<ProductReturnDto>(productParams.PageIndex, productParams.PageSize,
             totalItems, data));
        }
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductReturnDto>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product =  await _productsRepository.GetEntityWithSpec(spec);

            if(product == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Product, ProductReturnDto>(product);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromForm] ProductCreateDto productCreateDto)
        {
            var mapperProduct = _mapper.Map<Product>(productCreateDto);
            
            string folderName = Path.Combine("images", "products");
            string fileName = await productCreateDto.Photo.SaveImgg(_env.WebRootPath, folderName);
            mapperProduct.PhotoUrl = fileName;
            
            await _productRepository.CreateProductAsync(mapperProduct);
            return Ok(mapperProduct);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> Update(int id, [FromForm] ProductUpdateDto productUpdateDto)
        {
            if (id != productUpdateDto.Id) return BadRequest();
            var mapperproduct = _mapper.Map<Product>(productUpdateDto);
            Product product=await _productRepository.UpdateProductAsync(mapperproduct,_env.WebRootPath);
            if (product == null) return BadRequest();
           
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            // Product product = await _productRepository.DeleteProductAsync(id,_env.WebRootPath);
            // if (product == null) return NotFound();
            // return Ok();

             var dbProduct = _context.Products.FirstOrDefault(p => p.Id == id);
            if (dbProduct == null) return NotFound();
            _context.Products.Remove(dbProduct);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _productTypeRepository.ListAllAsync());
        }
        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _productBrandRepository.ListAllAsync());
        }
        [HttpGet("sizes")]
        public async Task<ActionResult<IReadOnlyList<ProductSize>>> GetProductSizes()
        {
            return Ok(await _productSizeRepository.ListAllAsync());
        }
        [HttpGet("colors")]
        public async Task<ActionResult<IReadOnlyList<ProductColor>>> GetProductColors()
        {
            return Ok(await _productColorRepository.ListAllAsync());
        }
    }
}
