using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MarketApi.Models
{
    public class Seller
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        [Display(Name = "Name")]
        public string SellerName { get; set; }

        [Required]
        [MaxLength(13)]
        public string PhoneNumber { get; set; }

        public ICollection<AuctionItem> Items { get; set; }
    }
}
