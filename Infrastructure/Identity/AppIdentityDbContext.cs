
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContext :  IdentityDbContext<AppUser, AppRole, int, IdentityUserClaim<int>,
        AppUserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

        //     builder.Entity<AppUser>()
        //         .HasMany(ur => ur.UserRoles)
        //         .WithOne(u => u.User)
        //         .HasForeignKey(ur => ur.UserId)
        //         .IsRequired()
        //         .OnDelete(DeleteBehavior.Cascade);
            
        //     builder.Entity<AppRole>()
        //         .HasMany(ur => ur.UserRoles)
        //         .WithOne(u => u.Role)
        //         .HasForeignKey(ur => ur.RoleId)
        //         .IsRequired();
         }
    }
}
