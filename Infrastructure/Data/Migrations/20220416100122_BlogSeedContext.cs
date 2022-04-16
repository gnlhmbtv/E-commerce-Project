using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Data.Migrations
{
    public partial class BlogSeedContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Description", "PhotoUrl", "PublishTime", "Title", "Topic" },
                values: new object[] { 1, "Lorem  Ipsum Doler sit amet", "01_blog.jpg", new DateTime(2022, 4, 16, 14, 1, 21, 276, DateTimeKind.Local).AddTicks(2787), "New Mascara by Maybelline", "Mascara , Maybelline" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
