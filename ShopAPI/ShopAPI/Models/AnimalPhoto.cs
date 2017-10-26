using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ShopAPI.Models
{
    public class AnimalPhoto
    {
        public string URL { get; set; }
        [Key]
        [ForeignKey("Animal")]
        public int AnimalId { get; set; }
        public Animal Animal { get; set; }
    }
}