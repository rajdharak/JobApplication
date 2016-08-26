namespace JobApplication.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<JobApplication.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(JobApplication.Models.ApplicationDbContext context)
        {
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
            var store = new RoleStore<IdentityRole>(context);
            var manager = new RoleManager<IdentityRole>(store);

            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                var role = new IdentityRole { Name = "Admin" };
                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "EndUsers"))
            {
                var role = new IdentityRole { Name = "EndUsers" };
                manager.Create(role);
            }
            //Adding a default admin user
            var user = new ApplicationUser
            {
                Email = "admin2@promactinfo.com"         
            };

            user.UserName = "admin2@promactinfo.com";
            user.Name = "Admin";
            user.PhoneNum = "7069973499";
            string pwd = "Admin123";
            context.Users.AddOrUpdate(user);
            var UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            var result = UserManager.Create(user, pwd);
            if (result.Succeeded)
            {
                UserManager.AddToRole(user.Id, "Admin");
            }

        }
    }
}

