using System.ComponentModel.DataAnnotations;

namespace API.Dto
{
    public class BrandCreateDto
    {
        [Required]
        public string Name { get; set; }
    }
}