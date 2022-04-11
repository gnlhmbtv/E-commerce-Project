using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Data
{
    public static class ImageExtensionn
    {
           
        public static void DeleteImagee(string root, string folder, string fileName)
        {
            string filePath = Path.Combine(root, folder, fileName);
            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
            }
        }
        
        
        public static bool IsImagee(this IFormFile file)
        {
            return file.ContentType.Contains("image/");
        }

        public static bool MaxLengthh(this IFormFile file, int kb)
        {
            return file.Length / 1024 > kb;
        }

        public async static Task<string> SaveImgg(this IFormFile file, string root, string folder)
        {
            string fileName = Guid.NewGuid().ToString() + file.FileName;
            string resultPath = Path.Combine(root, folder, fileName);

            using (FileStream fileStream = new FileStream(resultPath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            return fileName;
        }
    }
}