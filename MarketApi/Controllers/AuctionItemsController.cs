using MarketApi.ServicesInterfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MarketApi.Models;

namespace MarketApi.Controllers
{
    [ApiController]
    [Route("/api/v1/[controller]")]
    public class AuctionItemsController : Controller
    {
        private IAuctionItemService _auctionItemService;

        // Constructor with service
        public AuctionItemsController(IAuctionItemService auctionItemService)
        {
            _auctionItemService = auctionItemService;
        }

        [HttpGet]
        [Produces(typeof(List<AuctionItem>))]
        public IActionResult GetAllSellers()
        {
            var auctionItems = _auctionItemService.Get();
            return Ok(auctionItems);
        }

        [HttpPost]
        public IActionResult Post([FromBody] AuctionItem auctionItem)
        {
            if (_auctionItemService.Post(auctionItem))
                return Ok();
            else
                return NoContent(); // Serivce unavaible
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Put([FromRoute] int id, [FromBody] AuctionItem auctionItem)
        {
            // Protection in case of mistake
            if (id != auctionItem.Id)
            {
                return Conflict("Given ids are diferent"); // 209
            }
            else
            {
                var isUpdateSuccessful = _auctionItemService.Put(id, auctionItem);

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
            var isDeleteSuccessful = _auctionItemService.Delete(id);
            if (isDeleteSuccessful)
                return NoContent();
            else
                return NotFound();
        }
    }
}
