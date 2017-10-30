using ShopAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShopAPI.Models
{
    public class UnitOfWork : IUnitOfWork
    {
        private ApplicationDbContext context;
        public IRepository<Animal> AnimalRepository { get; }

        public IRepository<ApplicationUser> UserRepository { get; }

        public UnitOfWork(ApplicationDbContext context, IRepository<Animal> animalRepository, IRepository<ApplicationUser> userRepository)
        {
            this.AnimalRepository = animalRepository;
            this.UserRepository = userRepository;
            this.context = context;
        }

        public void Save()
        {
            AnimalRepository.Save();
        }
    }
}