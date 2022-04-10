using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Data.Migrations
{
    public partial class AboutSeeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Abouts",
                columns: new[] { "Id", "Description", "PhotoUrl", "Title" },
                values: new object[] { 1, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa! Asperiores labore amet nemo ullam odit atque adipisci, hic, aliquid animi fugiat praesentium quidem.  Perspiciatis, expedita!", "assets/images/inner-page/review-image/8.jpg", "largest Online fashion destination" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Abouts",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
