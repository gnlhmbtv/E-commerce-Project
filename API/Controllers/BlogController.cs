using System.Collections.Generic;
using System.IO;
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

namespace API.Controllers
{
    public class BlogController : BaseApiController
    {
        private readonly IBlogRepository _blogRepository;
        private readonly IMapper _mapper;
        private readonly IWebHostEnvironment _env;
        private readonly IGenericRepository<Blog> _blogsRepository;

        public BlogController(IMapper mapper,
            IWebHostEnvironment env,
            IBlogRepository blogRepository,
            IGenericRepository<Blog> blogsRepository)
        {
            _blogRepository = blogRepository;
            _mapper = mapper;
            _env = env;
            _blogsRepository = blogsRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<BlogReturnDto>>> GetBlogs(
             [FromQuery]BlogSpecificationParams blogParams
        )
        {
            var spec = new BlogsSpecification(blogParams);

            var countSpec = new BlogFilterCountSpecification(blogParams);

            var totalItems = await _blogsRepository.CountAsync(countSpec);

            var blogs = await _blogsRepository.ListAsync(spec);
            
            var data = _mapper.Map<IReadOnlyList<Blog>, IReadOnlyList<BlogReturnDto>>(blogs);

            return Ok(new Pagination<BlogReturnDto>(blogParams.PageIndex, blogParams.PageSize,
             totalItems, data));
        }


        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<BlogReturnDto>> GetBlog(int id)
        {
           var spec = new BlogsSpecification(id);

            var blog =  await _blogsRepository.GetEntityWithSpec(spec);

            if(blog == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Blog, BlogReturnDto>(blog);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromForm] BlogCreateDto blogCreateDto)
        {
            var mapperBlog = _mapper.Map<Blog>(blogCreateDto);
            
            string folderName = Path.Combine("images", "blogs");
            string fileName = await blogCreateDto.Photo.SaveImgg(_env.WebRootPath, folderName);
            mapperBlog.PhotoUrl = fileName;
            await _blogRepository.CreateBlogAsync(mapperBlog);
            return Ok(mapperBlog);
        }

        // [HttpPut("{id}")]
        // public async Task<ActionResult<Blog>> UpdateBlog(int id, [FromForm] BlogUpdateDto blogUpdateDto)
        // {
        //     if (id != blogUpdateDto.Id) return BadRequest();
        //     var mapperBlog = _mapper.Map<Blog>(blogUpdateDto);
        //     var blog= await _blogRepository.UpdateBlogAsync(mapperBlog,_env.WebRootPath);
        //     if (blog == null) return BadRequest();
           
        //     return Ok(blog);
        // }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            Blog blog = await _blogRepository.DeleteBlogAsync(id,_env.WebRootPath);
            if (blog == null) return NotFound();
            return Ok();
        }
    }
}