using MarketApi.Database;
using MarketApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace MarketApi.ServicesInterfaces
{
    public class SellerService: ISellerService
    {
        private readonly DataBaseContext _context;

        public SellerService(DataBaseContext context)
        {
            this._context = context;
        }

        public List<Seller> Get()
        {
            List<Seller> sellers = _context.Sellers.ToList();
            return sellers;
        }

        public List<Seller> Get(string name)
        {
            List<Seller> sellers = _context.Sellers.Where(p => p.SellerName.Equals(name)).ToList();
            return sellers;
        }

        public bool Post(Seller seller)
        {
            seller.Id = 0;
            try
            {
                _context.Sellers.Add(seller);
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                return false;
            }
            return true;
        }

        public bool Put(int id, Seller seller)
        {
            var sellerToUpdate = _context.Sellers.Where(p => p.Id.Equals(id)).SingleOrDefault();
            if (sellerToUpdate == null)
                return false;

            sellerToUpdate.SellerName = seller.SellerName;
            sellerToUpdate.PhoneNumber = seller.PhoneNumber;

            try
            {
                _context.Sellers.Update(sellerToUpdate);
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
            var SellerToDelete = _context.Sellers.Where(s => s.Id.Equals(id)).SingleOrDefault();
            if (SellerToDelete == null)
                return false;
            try
            {
                _context.Sellers.Remove(SellerToDelete);
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
