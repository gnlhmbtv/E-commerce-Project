using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager,  RoleManager<AppRole> roleManager)
        // public static async Task SeedUsersAsync(UserManager<AppUser> userManager,  RoleManager<AppRole> roleManager)
        {

            if (await userManager.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
            if (users == null) return;

             var roles = new List<AppRole>
            {
                new AppRole{Name = "Member"},
                new AppRole{Name = "Admin"},
                new AppRole{Name = "Moderator"},
            };

            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }
            
            foreach (var user in users)
            {
                user.UserName = user.UserName.ToLower();
                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");
            }

            var admin = new AppUser
            {
                UserName = "admin"
            };

            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRolesAsync(admin, new[] {"Admin", "Moderator"});
            // if(!userManager.Users.Any())
            // {
            //     var user = new AppUser
            //     {
            //         DisplayName = "Bob",
            //         Email = "bob@test.com",
            //         UserName = "bob@test.com",
            //         Address = new Address
            //         {
            //             FirstName = "Bob",
            //             LastName = "Bobbity",
            //             Street = "10 The Street",
            //             City = "New York",
            //             State = "NY",
            //             ZipCode = "90210"
            //         }
            //     };
            //     await userManager.CreateAsync(user, "Pa$$w0rd");

            //      var roles = new List<AppRole>
            // {
            //     new AppRole{Name = "Member"},
            //     new AppRole{Name = "Admin"},
            //     new AppRole{Name = "Moderator"},
            // };

            // foreach (var role in roles)
            // {
            //     await roleManager.CreateAsync(role);
            // }

                
            //}
        }
    }
}