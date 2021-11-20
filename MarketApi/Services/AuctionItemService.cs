using MarketApi.Database;
using MarketApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace MarketApi.ServicesInterfaces
{
    public class AuctionItemService: IAuctionItemService
    {
        private readonly DataBaseContext _context;

        public AuctionItemService(DataBaseContext context)
        {
            this._context = context;
        }

        public List<AuctionItem> Get()
        {
            List<AuctionItem> auctions = _context.AuctionItems.ToList();
            return auctions;
        }

        public AuctionItem Get(int id)
        {
            var auctionItem = _context.AuctionItems.Where(p => p.Id.Equals(id)).SingleOrDefault();
            return auctionItem;
        }

        public bool Post(AuctionItem auctionItem)
        {
            auctionItem.Id = 0;
            try
            {
                _context.AuctionItems.Add(auctionItem);
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                return false;
            }
            return true;
        }

        public bool Put(int id, AuctionItem auctionItem)
        {
            var AuctionItemToUpdate = _context.AuctionItems.Where(p => p.Id.Equals(id)).SingleOrDefault();
            if (AuctionItemToUpdate == null)
                return false;

            AuctionItemToUpdate.ItemName = auctionItem.ItemName;
            AuctionItemToUpdate.Price = auctionItem.Price;
            AuctionItemToUpdate.Location = auctionItem.Location;
            AuctionItemToUpdate.Description = auctionItem.Description;
            AuctionItemToUpdate.Weight = auctionItem.Weight;
            AuctionItemToUpdate.Unit = auctionItem.Unit;
            AuctionItemToUpdate.UpdateDate = auctionItem.UpdateDate;
            AuctionItemToUpdate.Categories = auctionItem.Categories;

            try
            {
                _context.AuctionItems.Update(AuctionItemToUpdate);
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                return false;
            }

            return true;
        }

        public bool Delete(int id)
        {
            var AuctionItemToDelete = _context.AuctionItems.Where(s => s.Id.Equals(id)).SingleOrDefault();
            if (AuctionItemToDelete == null)
                return false;
            try
            {
                _context.AuctionItems.Remove(AuctionItemToDelete);
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                return false;
            }
            return true;
        }
    }
}
