using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dto;
using AutoMapper;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ContactController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public ContactController(DataContext context,IMapper mapper)
        {
            _context=context;
            _mapper = mapper;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Contact>> Get()
        {
            var contacts = _context.Contacts.ToList();
            
            return Ok(contacts);
        }

        [HttpGet("{id}")]
        public ActionResult<Contact> Get(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(p => p.Id == id);
            if (contact == null) return NotFound();
            
            return Ok(contact);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromForm] ContactCreateDto contactCreateDto)
        {
            Contact contact = new Contact
            {
                Name = contactCreateDto.Name,
                Email = contactCreateDto.Email,
                Phone = contactCreateDto.Phone,
                Subject = contactCreateDto.Subject,
                Message = contactCreateDto.Message
            };
           
            await _context.AddAsync(contact);
            await _context.SaveChangesAsync();
            return Ok(contact);
        }

         [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var dbContact = _context.Contacts.FirstOrDefault(p => p.Id == id);
            if (dbContact == null) return NotFound();
            _context.Contacts.Remove(dbContact);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}