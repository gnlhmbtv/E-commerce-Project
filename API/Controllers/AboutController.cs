using System.IO;
using System.Linq;
using System.Threading.Tasks;
using API.Dto;
using API.Extensions;
using AutoMapper;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AboutController : BaseApiController
    {
         private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IWebHostEnvironment _env;
        public AboutController(DataContext context,
                               IMapper mapper,
                               IWebHostEnvironment env)
        {
            _context=context;
            _mapper = mapper;
            _env = env;
        }

        [HttpGet]
        public ActionResult<AboutReturnDto> Get()
        {
            About about = _context.Abouts.FirstOrDefault();
            var mapperAbout = _mapper.Map<About,AboutReturnDto>(about);
            return Ok(mapperAbout);
        }
        
        // [HttpPut("{id}")]
        // public async Task<ActionResult<About>> Update(int id, [FromForm] AboutUpdateDto aboutUpdateDto)
        // {
        //     if (id != aboutUpdateDto.Id) return BadRequest();
        //     About dbAbout = _context.Abouts.FirstOrDefault(p => p.Id == id);
        //     if (dbAbout == null) return NotFound();
        //     dbAbout.Title = aboutUpdateDto.Title;
        //     dbAbout.Description = aboutUpdateDto.Description;
            
        //     string folderName = Path.Combine("images", "about");
        //     if (aboutUpdateDto.Photo!=null)
        //     {
        //         ImageExtensionn.DeleteImagee(_env.WebRootPath,folderName,dbAbout.PhotoUrl);
        //         string fileName = await aboutUpdateDto.Photo.SaveImgg(_env.WebRootPath, folderName);
        //         dbAbout.PhotoUrl = fileName;
        //     }
        //     await _context.SaveChangesAsync();
        //      return Ok();
        // }
    }
}