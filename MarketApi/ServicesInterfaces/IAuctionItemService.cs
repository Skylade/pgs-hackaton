using MarketApi.Models;
using System.Collections.Generic;

namespace MarketApi.ServicesInterfaces
{
    public interface IAuctionItemService
    {
        List<AuctionItem> Get();

        bool Post(AuctionItem station);

        bool Put(int id, AuctionItem station);

        bool Delete(int id);
    }
}
