using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Core.Entities.Identity
{
    public class AppUser : IdentityUser<int>
    {
     public string DisplayName { get; set; }
     public Address Address { get; set; }  
    //  public ICollection<AppUserRole> UserRoles { get; set; }
 
    }
}