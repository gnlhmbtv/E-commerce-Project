using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IBlogRepository
    {
        Task<List<Blog>> GetBlogsAsync();
        Task<Blog> GetBlogByIdAsync(int id);
        Task<Blog> CreateBlogAsync(Blog blog);
        Task<Blog> UpdateBlogAsync(Blog blog,string webRoot);
        Task<Blog> DeleteBlogAsync(int id,string webRoot);
    }
}