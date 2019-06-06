using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelter3._0.Models
{
    //public class AppDbContext : IdentityDbContext<IdentityUser>
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
                
        }

        public DbSet<Advert> Adverts { get; set; }
        public DbSet<IdentityUser> AspNetUsers { get; set; }
    }
}
