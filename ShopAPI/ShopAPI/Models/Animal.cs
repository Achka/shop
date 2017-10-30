using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ShopAPI.Models
{
    public class Animal
    {
        [Key]
        public int AnimalId { get; set; }
        public string Breed { get; set; }
        public double Age { get; set; }
        public string Description { get; set; }

        public double Price { get; set; }
        public AnimalPhoto AnimalPhoto { get; set; }

        
    }
}