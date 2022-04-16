namespace Core.Entities
{
    public class ReplyToComment : BaseEntity
    {
        public string Context { get; set; }
        public int CommentId { get; set; }
        public Comment Comment { get; set; }
    }
}