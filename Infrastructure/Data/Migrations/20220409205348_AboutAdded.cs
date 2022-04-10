using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Data.Migrations
{
    public partial class AboutAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // migrationBuilder.AlterColumn<long>(
            //     name: "OrderDate",
            //     table: "Orders",
            //     nullable: false,
            //     oldClrType: typeof(DateTimeOffset),
            //     oldType: "TEXT");

            migrationBuilder.CreateTable(
                name: "Abouts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    PhotoUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Abouts", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Abouts");

            // migrationBuilder.AlterColumn<DateTimeOffset>(
            //     name: "OrderDate",
            //     table: "Orders",
            //     type: "TEXT",
            //     nullable: false,
            //     oldClrType: typeof(long));
        }
    }
}
