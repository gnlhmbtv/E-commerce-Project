namespace Core.Entities
{
    public class About : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string PhotoUrl { get; set; }
    }
}