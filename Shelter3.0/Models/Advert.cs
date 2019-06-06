﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Shelter3._0.Models
{
    public class Advert
    {
        public int AdvertId { get; set; }
        [Required]
        [StringLength(40, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        public string Title { get; set; }
        public string AuthorId { get; set; }
        public string ReservingId { get; set; }
        [Required]
        [DisplayName("Short Description")]
        [StringLength(70, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 10)]
        public string ShortDescription { get; set; }
        [Required]
        [DisplayName("Long Description")]
        [StringLength(450, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 30)]
        public string LongDescription { get; set; }
        [Url]
        public string ImageUrl { get; set; }

        [ForeignKey("AuthorId")]
        public IdentityUser AuthorUser { get; set; }
        [ForeignKey("ReservingId")]
        public IdentityUser ReservingUser { get; set; }
    }
}
