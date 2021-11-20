using MarketApi.Models;
using Microsoft.EntityFrameworkCore;

namespace MarketApi.Database
{

    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options)
        {

        }

        public DbSet<AuctionItem> AuctionItems { get; set; }

        public DbSet<Seller> Sellers { get; set; }

    }
}
