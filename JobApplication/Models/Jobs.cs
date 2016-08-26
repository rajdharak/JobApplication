using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace JobApplication.Models
{
    public class Jobs
    {   
        [Key]
        public int Id { get; set;}

        [Required]
        [MaxLength(15)]
        public string JobName { get; set; }


        [Required]
        [MaxLength(160)]
        public string Description  { get; set; }

        [Required]
        public int Positions { get; set; }

        public int PositionsLeft { get; set; }


        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser Users { get; set; }

    }
}