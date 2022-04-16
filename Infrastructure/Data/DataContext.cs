using System;
using System.Linq;
using System.Reflection;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.Data
{
    public class DataContext : DbContext
    // public class DataContext : IdentityDbContext<AppUser, AppRole, int, IdentityUserClaim<int>,
    //     AppUserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    // {
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }
        public DbSet<About> Abouts { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<ReplyToComment> ReplyToComments { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<ProductColor> ProductColors  { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<ProductSize> ProductSizes  { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            if (Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
            {
                foreach (var entityType in modelBuilder.Model.GetEntityTypes())
                {
                    var properties = entityType.ClrType.GetProperties().Where(p => p.PropertyType
                    == typeof(decimal));
                    var dateTimeProperties = entityType.ClrType.GetProperties()
                        .Where(p => p.PropertyType == typeof(DateTimeOffset));

                    foreach (var property in properties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name)
                            .HasConversion<double>();
                    }
                    foreach (var property in dateTimeProperties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name)
                            .HasConversion(new DateTimeOffsetToBinaryConverter());
                    }
                }
                modelBuilder.Entity<About>().HasData(
                new About
                {
                    Id = 1,
                    Title = "largest Online fashion destination",
                    PhotoUrl = "assets/images/inner-page/review-image/8.jpg",
                    Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa! Asperiores labore amet nemo ullam odit atque adipisci, hic, aliquid animi fugiat praesentium quidem.  Perspiciatis, expedita!"
                }
            );
             modelBuilder.Entity<Blog>().HasData(
                new Blog
                {
                    Id = 1, Title = "New Mascara by Maybelline",
                    PhotoUrl = "01_blog.jpg",Topic = "Mascara , Maybelline",
                    PublishTime = DateTime.Now,
                    Description = "Lorem  " +
                                  "Ipsum " +
                                  "Doler sit amet"                               
                }
            );

        //      modelBuilder.Entity<Size>().HasData(
        //         new Size
        //         {
        //             SizeId = 1, SizeName = "XS",
                                                 
        //         },
        //         new Size
        //         {
        //             SizeId = 2, SizeName = "S",
                                                 
        //         },
        //         new Size
        //         {
        //             SizeId = 3, SizeName = "M",
                                                 
        //         },
        //         new Size
        //         {
        //             SizeId = 4, SizeName = "XL",
                                                 
        //         },
        //         new Size
        //         {
        //             SizeId = 5, SizeName = "L",
                                                 
        //         }
        //     );


        //      modelBuilder.Entity<Color>().HasData(
        //         new Color
        //         {
        //             ColorId = 1, ColorName = "Red",
                                                 
        //         },
        //         new Color
        //         {
        //             ColorId = 2, ColorName = "Blue",
                                                 
        //         },
        //         new Color
        //         {
        //             ColorId = 3, ColorName = "Green",
                                                 
        //         },
        //         new Color
        //         {
        //             ColorId = 4, ColorName = "Purple",
                                                 
        //         },
        //         new Color
        //         {
        //             ColorId = 5, ColorName = "Yellow",
                                                 
        //         },
        //         new Color
        //         {
        //             ColorId = 6, ColorName = "Orange",
                                                 
        //         }
        //     );

            modelBuilder.Entity<ProductSize>()
                .HasKey(ps => new { ps.ProductId, ps.SizeId });  

            modelBuilder.Entity<ProductSize>()
                .HasOne(bc => bc.Product)
                .WithMany(b => b.ProductSize)
                .HasForeignKey(bc => bc.ProductId);  

            modelBuilder.Entity<ProductSize>()
                .HasOne(bc => bc.Size)
                .WithMany(c => c.ProductSize)
                .HasForeignKey(bc => bc.SizeId);


            modelBuilder.Entity<ProductColor>()
                .HasKey(ps => new { ps.ProductId, ps.ColorId });  

            modelBuilder.Entity<ProductColor>()
                .HasOne(bc => bc.Product)
                .WithMany(b => b.ProductColor)
                .HasForeignKey(bc => bc.ProductId);  

            modelBuilder.Entity<ProductColor>()
                .HasOne(bc => bc.Color)
                .WithMany(c => c.ProductColor)
                .HasForeignKey(bc => bc.ColorId);
            }
         }
    }
}
