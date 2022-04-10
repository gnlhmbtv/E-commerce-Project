using Core.Entities;

namespace API.Dto
{
    public class AboutReturnDto : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string PhotoUrl { get; set; }
    }
}