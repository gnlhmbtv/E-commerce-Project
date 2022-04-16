using System;
using System.Collections.Generic;
using Core.Entities.Identity;

namespace Core.Entities
{
    public class Comment : BaseEntity
    {
        public string Context { get; set; }
        public DateTime PublishTime { get; set; }
        public int BlogId { get; set; }
        public Blog Blog { get; set; }
        public int UserId { get; set; }
        public AppUser User { get; set; }
        public ICollection<ReplyToComment> ReplyToComments { get; set; }
        public Comment()
        {
            PublishTime=DateTime.Now;
        }
    }
}