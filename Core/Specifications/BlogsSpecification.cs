using Core.Entities;

namespace Core.Specifications
{
    public class BlogsSpecification : BaseSpecification<Blog>
    {
         public BlogsSpecification(BlogSpecificationParams blogParams)
            :base(x => 
                (string.IsNullOrEmpty(blogParams.Search) || x.Title.ToLower().Contains(blogParams.Search))
            )
            {
                Paging(blogParams.PageSize * (blogParams.PageIndex - 1), blogParams.PageSize);
            }

            public BlogsSpecification(int id) : base(x => x.Id == id)
        {
        }
    }
}