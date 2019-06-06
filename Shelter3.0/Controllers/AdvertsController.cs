using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Shelter3._0.Models;

namespace Shelter3._0.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertsController : ControllerBase
    {

        private readonly IAdvertRepository _advertRepository;
        private readonly IUserRepository _userRepository;
       // private readonly UserManager<IdentityUser> _userManager;

        public AdvertsController(IAdvertRepository advertRepository, IUserRepository userRepository )
        {
            _advertRepository = advertRepository;
            _userRepository = userRepository;
          //  _userManager = userManager;
        }



        // GET: api/Adverts
        [HttpGet]
        public IActionResult Get()
        {
            var adverts = _advertRepository.GetAllAdverts();

            return Ok(adverts);
        }

        // GET: api/Adverts/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            var advert = _advertRepository.GetAdvertById(id);
            if (advert == null)
            {
                return NotFound();
            }

            return Ok(advert);
        }

        // POST: api/Adverts
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Adverts/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
