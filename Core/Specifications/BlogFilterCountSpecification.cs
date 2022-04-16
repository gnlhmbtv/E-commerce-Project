using Core.Entities;

namespace Core.Specifications
{
    public class BlogFilterCountSpecification : BaseSpecification<Blog>
    {
          public BlogFilterCountSpecification(BlogSpecificationParams blogParams) : base(x => 
            (string.IsNullOrEmpty(blogParams.Search) || x.Title.ToLower().Contains(blogParams.Search)))
           
        {
        }
    }
}