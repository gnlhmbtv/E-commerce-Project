using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class WishlisttAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1,
                column: "PublishTime",
                value: new DateTime(2022, 4, 17, 5, 40, 42, 637, DateTimeKind.Local).AddTicks(5592));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1,
                column: "PublishTime",
                value: new DateTime(2022, 4, 17, 5, 35, 7, 272, DateTimeKind.Local).AddTicks(2480));
        }
    }
}
