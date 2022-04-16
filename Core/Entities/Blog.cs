using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace Core.Entities
{
    public class Blog : BaseEntity
    {
        public string Title { get; set; }
        public string Topic { get; set; }
        public string Description { get; set; }
        public string PhotoUrl { get; set; }
        [NotMapped]
        public IFormFile Photo { get; set; }
        public DateTime PublishTime { get; set; }
        public ICollection<Comment> Comments { get; set; }

    }
}