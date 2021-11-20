using MarketApi.Models;
using System.Collections.Generic;

namespace MarketApi.ServicesInterfaces
{
    public interface ISellerService
    {
        List<Seller> Get();

        List<Seller> Get(string name);

        bool Post(Seller station);

        bool Put(int id, Seller station);

        bool Delete(int id);
    }
}
