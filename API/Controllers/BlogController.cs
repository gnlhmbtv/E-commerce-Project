using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using API.Dto;
using API.Extensions;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BlogController : ControllerBase
    {
        private readonly IBlogRepository _blogRepository;
        private readonly IMapper _mapper;
        private readonly IWebHostEnvironment _env;
        public BlogController(IMapper mapper,
            IWebHostEnvironment env,
            IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
            _mapper = mapper;
            _env = env;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var blogs = await _blogRepository.GetBlogsAsync();
            var mapperBlogs = _mapper.Map<IEnumerable<BlogReturnDto>>(blogs);
            return Ok(mapperBlogs);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var blog = await _blogRepository.GetBlogByIdAsync(id);
            if (blog == null) return NotFound();
            var mapperBlog = _mapper.Map<BlogReturnDto>(blog);
            
            return Ok(mapperBlog);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromForm] BlogCreateDto blogCreateDto)
        {
            var mapperBlog = _mapper.Map<Blog>(blogCreateDto);
            
            string folderName = Path.Combine("images", "blog");
            string fileName = await blogCreateDto.Photo.SaveImg(_env.WebRootPath, folderName);
            mapperBlog.PhotoUrl = fileName;
            await _blogRepository.CreateBlogAsync(mapperBlog);
            return Ok(mapperBlog);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Blog>> UpdateBlog(int id, [FromForm] BlogUpdateDto blogUpdateDto)
        {
            if (id != blogUpdateDto.Id) return BadRequest();
            var mapperBlog = _mapper.Map<Blog>(blogUpdateDto);
            var blog= await _blogRepository.UpdateBlogAsync(mapperBlog,_env.WebRootPath);
            if (blog == null) return BadRequest();
           
            return Ok(blog);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            Blog blog = await _blogRepository.DeleteBlogAsync(id,_env.WebRootPath);
            if (blog == null) return NotFound();
            return Ok();
        }
    }
}