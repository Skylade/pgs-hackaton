using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MarketApi.Models
{
    public class AuctionItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        [Display(Name = "Name")]
        public string ItemName { get; set; }

        [Required]
        [Range(0, Int32.MaxValue, ErrorMessage = "Price should be greater than or equal to 0")]
        public int Price { get; set; }

        [Required]
        [MaxLength(100)]
        public string Location { get; set; }

        [DefaultValue(ItemCategory.Other)]
        public ICollection<ItemCategory> Categories { get; set; }

        [MaxLength(250)]
        public string Description { get; set; }

        [Range(0, Int32.MaxValue, ErrorMessage = "Weight should be greater than or equal to 0")]
        public int Weight { get; set; }

        public Unit Unit { get; set; }

        [Required]
        public DateTime UpdateDate { get; set; }

        [Required]
        public int SellerId { get; set; }

        [ForeignKey("SellerId")]
        [Display(Name = "Seller")]
        public Seller Seller { get; set; }
    }
}
