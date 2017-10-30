namespace ShopAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _456789 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Animals", "ApplicationUser_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Animals", "ApplicationUser_Id");
            AddForeignKey("dbo.Animals", "ApplicationUser_Id", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Animals", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Animals", new[] { "ApplicationUser_Id" });
            DropColumn("dbo.Animals", "ApplicationUser_Id");
        }
    }
}
