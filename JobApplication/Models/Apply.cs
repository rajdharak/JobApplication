using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace JobApplication.Models
{
    public class Apply
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Url]
        public string GitHubUrl { get; set; }

        public string Resume { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser Users { get; set; }

        public int JobId { get; set; }
        [ForeignKey("JobId")]
        public Jobs Jobs { get; set; }
    }
}