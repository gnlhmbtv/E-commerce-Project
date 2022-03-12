using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dto;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly IGenericRepository<ProductBrand> _productBrandRepository;
        private readonly IGenericRepository<ProductType> _productTypeRepository;
        private readonly IGenericRepository<Product> _productsRepository;
        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productsRepository,
        IGenericRepository<ProductBrand> productBrandRepository,
        IGenericRepository<ProductType> productTypeRepository,
        IMapper mapper)
        {
            _productTypeRepository = productTypeRepository;
            _productBrandRepository = productBrandRepository;
            _productsRepository = productsRepository;
            _mapper = mapper;

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