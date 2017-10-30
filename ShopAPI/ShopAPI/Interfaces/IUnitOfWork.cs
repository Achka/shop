using ShopAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopAPI.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository<Animal> AnimalRepository { get; }
        IRepository<ApplicationUser> UserRepository { get; }
        void Save();
    }
}
