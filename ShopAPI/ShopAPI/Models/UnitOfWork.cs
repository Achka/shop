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

        public UnitOfWork(ApplicationDbContext context, IRepository<Animal> animalRepository)
        {
            this.AnimalRepository = animalRepository;
            this.context = context;
        }

        public void Save()
        {
            AnimalRepository.Save();
        }
    }
}