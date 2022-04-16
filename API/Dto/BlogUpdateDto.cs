using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities;
using Microsoft.AspNetCore.Http;

namespace API.Dto
{
    public class BlogUpdateDto : BaseEntity
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Topic { get; set; }
        [Required]
        public string Description { get; set; }
        [NotMapped]
        public IFormFile Photo { get; set; }
    }
}