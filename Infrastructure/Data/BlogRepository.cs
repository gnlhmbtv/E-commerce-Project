using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using API.Extensions;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class BlogRepository : IBlogRepository
    {
        private readonly DataContext _context;
        public BlogRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Blog> CreateBlogAsync(Blog blog)
        {
            await _context.Blogs.AddAsync(blog); 
            await _context.SaveChangesAsync();
            return blog;
        }

        public async Task<List<Blog>> GetBlogsAsync()
        {
            var blogs = await _context.Blogs.ToListAsync();
            return blogs;
        }

          public async Task<Blog> GetBlogByIdAsync(int id)
        {
            var blog = await _context.Blogs.Include(c=>c.Comments).FirstOrDefaultAsync(b => b.Id == id);
            return blog;
        }


        public async Task<Blog> DeleteBlogAsync(int id, string webRoot)
        {
           var dbBlog =await _context.Blogs.FirstOrDefaultAsync(b => b.Id == id);
            if (dbBlog == null) return dbBlog;
            
            string folderName = Path.Combine("images", "blog");
            
            _context.Blogs.Remove(dbBlog);
            ImageExtension.DeleteImage(webRoot,folderName,dbBlog.PhotoUrl);
            
            await _context.SaveChangesAsync();
            return dbBlog;
        }

         public async Task<Blog> UpdateBlogAsync(Blog blog, string webRoot)
        {
            var dbBlog = await _context.Blogs.FirstOrDefaultAsync(b => b.Id == blog.Id);
            if (dbBlog == null) return dbBlog;
            string folderName = Path.Combine("images", "blog");
            if (blog.Photo!=null)
            {
                ImageExtension.DeleteImage(webRoot,folderName,dbBlog.PhotoUrl);
                string fileName = await blog.Photo.SaveImg(webRoot, folderName);
                dbBlog.PhotoUrl = fileName;
            }

            dbBlog.Title = blog.Title;
            dbBlog.Description = blog.Description;
            dbBlog.Topic = blog.Topic;
            await _context.SaveChangesAsync();
            
            return dbBlog;
        }
    }
}