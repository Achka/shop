using ShopAPI.Interfaces;
using ShopAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ShopAPI.Controllers
{
    [Authorize]
    public class AnimalController : ApiController
    {
        private IUnitOfWork unitOfWork;

        public AnimalController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        [HttpGet]
        public List<Animal> GetAllAnimals()
        {
            return unitOfWork.AnimalRepository.GetAll().ToList();
        }


        [HttpPost]
        [Route("api/Animal/Update")]
        public void Update(Animal animal)
        {
            unitOfWork.AnimalRepository.Update(animal);
            unitOfWork.Save();
        }

        [HttpDelete]
        public void Delete(int id)
        {
            unitOfWork.AnimalRepository.Delete(id);
            unitOfWork.Save();
        }

        [HttpPost]
        [Route("api/Animal/Add")]
        public void Add(Animal animal)
        {
            unitOfWork.AnimalRepository.Create(animal);
            unitOfWork.Save();
        }
    }
}
