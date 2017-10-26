using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ShopAPI.Models
{
    public class AppDbInitializer : DropCreateDatabaseAlways<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            var userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(context));

            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

            // create admin role
            var adminRole = new IdentityRole { Name = "admin" };

            // add this roles to DB
            roleManager.Create(adminRole);

            // create user with admin role
            var admin = new ApplicationUser { Email = "andriana@gmail.com", UserName = "andriana@gmail.com" };
            string password = "Password123456!";
            var result = userManager.Create(admin, password);

            // if admin succesfully created
            if (result.Succeeded)
            {
                // add role to him
                userManager.AddToRole(admin.Id, adminRole.Name);
            }

            base.Seed(context);
        }
    }

}