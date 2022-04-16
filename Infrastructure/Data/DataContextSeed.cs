using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class DataContextSeed
    {
        public static async Task SeedAsync(DataContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if(!context.ProductBrands.Any())
                {
                    var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                    foreach (var item in brands)
                    {
                        context.ProductBrands.Add(item);
                    }
                    await context.SaveChangesAsync();
                }


                 if(!context.ProductTypes.Any())
                {
                    var typesData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
                    foreach (var item in types)
                    {
                        context.ProductTypes.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

                 if(!context.ProductSizes.Any())
                {
                    var sizesData = File.ReadAllText("../Infrastructure/Data/SeedData/sizes.json");
                    var sizes = JsonSerializer.Deserialize<List<ProductSize>>(sizesData);
                    foreach (var item in sizes)
                    {
                        context.ProductSizes.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

                 if(!context.ProductColors.Any())
                {
                    var colorsData = File.ReadAllText("../Infrastructure/Data/SeedData/colors.json");
                    var colors = JsonSerializer.Deserialize<List<ProductColor>>(colorsData);
                    foreach (var item in colors)
                    {
                        context.ProductColors.Add(item);
                    }
                    await context.SaveChangesAsync();
                }


                 if(!context.Products.Any())
                {
                    var productsData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                    foreach (var item in products)
                    {
                        context.Products.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

                 if(!context.DeliveryMethods.Any())
                {
                    var deliveryMethodData = File.ReadAllText("../Infrastructure/Data/SeedData/delivery.json");
                    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryMethodData);
                    foreach (var item in methods)
                    {
                        context.DeliveryMethods.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
            }
            catch (Exception exc)
            {
                var logger = loggerFactory.CreateLogger<DataContextSeed>();
                logger.LogError(exc.Message, "Cannot seed the data");
            }
        }
    }
}