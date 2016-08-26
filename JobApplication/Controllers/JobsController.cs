using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using JobApplication.Models;
using Microsoft.AspNet.Identity;

namespace JobApplication.Controllers
{
    [RoutePrefix("api/Jobs")]
    public class JobsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Jobs
        public IQueryable<Jobs> GetJobs()
        {
            return db.Jobs;
        }
        
        // GET: api/Jobs/5
        [ResponseType(typeof(Jobs))]
        [HttpGet]
        [Route]
        public IHttpActionResult GetJobs(int id)
        {
            Jobs jobs = db.Jobs.Find(id);
            if (jobs == null)
            {
                return NotFound();
            }

            return Ok(jobs);
        }

        // PUT: api/Jobs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJobs(int id, Jobs jobs)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jobs.Id)
            {
                return BadRequest();
            }

            db.Entry(jobs).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
    
        // POST: api/Jobs
        [ResponseType(typeof(Jobs))]
        [HttpPost]
        [Route]
        public IHttpActionResult PostJobs(Jobs jobs)
        {

            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            jobs.UserId = user.Id;
            jobs.PositionsLeft = jobs.Positions;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Jobs.Add(jobs);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = jobs.Id }, jobs);
        }

        // DELETE: api/Jobs/5
        [ResponseType(typeof(Jobs))]
        public IHttpActionResult DeleteJobs(int id)
        {
            Jobs jobs = db.Jobs.Find(id);
            if (jobs == null)
            {
                return NotFound();
            }

            db.Jobs.Remove(jobs);
            db.SaveChanges();

            return Ok(jobs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JobsExists(int id)
        {
            return db.Jobs.Count(e => e.Id == id) > 0;
        }
    }
}