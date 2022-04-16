using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Data.Migrations
{
    public partial class SizeAndColorAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1,
                column: "PublishTime",
                value: new DateTime(2022, 4, 17, 3, 27, 8, 88, DateTimeKind.Local).AddTicks(6113));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Blogs",
                keyColumn: "Id",
                keyValue: 1,
                column: "PublishTime",
                value: new DateTime(2022, 4, 16, 14, 1, 21, 276, DateTimeKind.Local).AddTicks(2787));
        }
    }
}
