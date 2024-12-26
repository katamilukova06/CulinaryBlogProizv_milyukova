using Microsoft.EntityFrameworkCore.Migrations;

namespace CulinaryBlog.DAL.Migrations
{
    public partial class ProfilePhotoAndUsername : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "profile_photo_path",
                table: "user",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "username",
                table: "user",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "profile_photo_path",
                table: "user");

            migrationBuilder.DropColumn(
                name: "username",
                table: "user");
        }
    }
}
