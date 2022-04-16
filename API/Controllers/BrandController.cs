using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dto;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BrandController : BaseApiController
    {
        private readonly IBrandRepository _brandRepository;
        private readonly IGenericRepository<ProductBrand> _brandsRepository;
        private readonly IMapper _mapper;


        public BrandController(IMapper mapper,
        IBrandRepository brandRepository,
        IGenericRepository<ProductBrand> brandsRepository)
        {
            _brandsRepository = brandsRepository;
            _brandRepository = brandRepository;
            _mapper = mapper;
        }

         [HttpGet]
        public async Task<ActionResult<Pagination<BrandReturnDto>>> GetBrands(
             [FromQuery]BrandSpecificationParams brandParams
        )
        {
            var spec = new BrandsSpecification(brandParams);

            var countSpec = new BrandFilterCountSpecification(brandParams);

            var totalItems = await _brandsRepository.CountAsync(countSpec);

            var brands = await _brandsRepository.ListAsync(spec);
            
            var data = _mapper.Map<IReadOnlyList<ProductBrand>, IReadOnlyList<BrandReturnDto>>(brands);

            // return Ok();
            return Ok(new Pagination<BrandReturnDto>(brandParams.PageIndex, brandParams.PageSize,
             totalItems, data));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<BrandReturnDto>> GetBrand(int id)
        {
           var spec = new BrandsSpecification(id);

            var brand =  await _brandsRepository.GetEntityWithSpec(spec);

            if(brand == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<ProductBrand, BrandReturnDto>(brand);
        }

         [HttpPost]
        public async Task<ActionResult> Create([FromForm] BrandCreateDto brandCreateDto)
        {
            var mapperBrand = _mapper.Map<ProductBrand>(brandCreateDto);
            
            await _brandRepository.CreateBrandAsync(mapperBrand);
            return Ok(mapperBrand);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            ProductBrand brand = await _brandRepository.DeleteBrandAsync(id);
            if (brand == null) return NotFound();
            return Ok();
        }
    }
}