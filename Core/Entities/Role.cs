using System.Collections.Generic;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Core.Entities
{
    public class Role : IdentityRole<int>
    {
         public ICollection<AppUserRole> UserRoles { get; set; }
    }
}