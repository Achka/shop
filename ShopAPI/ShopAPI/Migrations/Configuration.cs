namespace ShopAPI.Migrations
{
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Microsoft.AspNet.Identity;

    internal sealed class Configuration : DbMigrationsConfiguration<ShopAPI.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ApplicationDbContext context)
        {
            //context = new AppDbInitializer();
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            var userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(context));

            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

            // create admin role
            

            // add this roles to DB
         
            var admin = new ApplicationUser { Email = "andriana1@gmail.com", UserName = "andriana1@gmail.com" };
            string password = "Password123456!";
            var result = userManager.Create(admin, password);
            


            context.Animals.AddOrUpdate(a => a.AnimalId,
                new Animal
                {
                    Breed = "Cat",
                    Age = 1,
                    Description = "Very nice cat",
                    AnimalPhoto = null,
                });
        }
    }
}
