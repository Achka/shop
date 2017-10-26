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

    }
}
