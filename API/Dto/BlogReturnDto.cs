using System;
using System.Collections.Generic;
using Core.Entities;

namespace API.Dto
{
    public class BlogReturnDto : BaseEntity
    {
        public string Title { get; set; }
        public string Topic { get; set; }
        public string Description { get; set; }
        public string PhotoUrl { get; set; }
        public DateTime PublishTime { get; set; }
        public ICollection<string> Comments { get; set; }
    }
}