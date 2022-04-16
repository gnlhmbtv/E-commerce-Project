using System;
using Core.Entities;

namespace API.Dto
{
    public class CommentReturnDto : BaseEntity
    {
        public string Context { get; set; }
        public DateTime PublishTime { get; set; }
        public string Blog { get; set; }
        public int BlogId { get; set; }
        public string User { get; set; }
        public int UserId { get; set; }
    }
}