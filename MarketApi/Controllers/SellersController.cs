using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MarketApi.ServicesInterfaces;
using MarketApi.Models;

namespace MarketApi.Controllers
{
    [ApiController]
    [Route("/api/v1/[controller]")]
    public class SellersController : Controller
    {
        private ISellerService _sellerService;

        // Constructor with service
        public SellersController(ISellerService trainService)
        {
            _sellerService = trainService;
        }

        [HttpGet]
        [Produces(typeof(List<Seller>))]
        public IActionResult GetAllSellers()
        {
            var sellers = _sellerService.Get();
            return Ok(sellers);
        }

        [HttpGet]
        [Route("{name}")]
        [Produces(typeof(List<Seller>))]
        public IActionResult GetAllSellersWithName([FromRoute] string name)
        {
            var sellers = _sellerService.Get(name);
            return Ok(sellers);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Seller seller)
        {
            if (_sellerService.Post(seller))
                return Ok();
            else
                return NoContent(); // Serivce unavaible
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Put([FromRoute] int id, [FromBody] Seller seller)
        {
            // Protection in case of mistake
            if (id != seller.Id)
            {
                return Conflict("Given ids are diferent"); // 209
            }
            else
            {
                var isUpdateSuccessful = _sellerService.Put(id, seller);

                if (isUpdateSuccessful)
                    return NoContent(); // 204
                else
                    return NotFound(); // 404
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var isDeleteSuccessful = _sellerService.Delete(id);
            if (isDeleteSuccessful)
                return NoContent();
            else
                return NotFound();
        }
    }
}
