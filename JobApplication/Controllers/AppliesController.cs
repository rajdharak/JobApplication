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
    [RoutePrefix("api/Applies")]
    public class AppliesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Applies
        public IQueryable<Apply> GetApplies()
        {
            return db.Applies;
        }

        // GET: api/Applies/5
        [ResponseType(typeof(Apply))]
        public IHttpActionResult GetApply(int id)
        {
            Apply apply = db.Applies.Find(id);
            if (apply == null)
            {
                return NotFound();
            }

            return Ok(apply);
        }

        // PUT: api/Applies/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutApply(int id, Apply apply)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != apply.Id)
            {
                return BadRequest();
            }

            db.Entry(apply).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplyExists(id))
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
        [HttpPost]
        [Route]
        // POST: api/Applies
        [ResponseType(typeof(Apply))]
        public IHttpActionResult PostApply(int jobid,Apply apply)
        {

            var id = User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            apply.UserId = user.Id;
            apply.JobId = jobid;
            Jobs jobs = new Jobs();
            jobs.PositionsLeft = jobs.PositionsLeft - 1;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Applies.Add(apply);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = apply.Id }, apply);
        }

        // DELETE: api/Applies/5
        [ResponseType(typeof(Apply))]
        public IHttpActionResult DeleteApply(int id)
        {
            Apply apply = db.Applies.Find(id);
            if (apply == null)
            {
                return NotFound();
            }

            db.Applies.Remove(apply);
            db.SaveChanges();

            return Ok(apply);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApplyExists(int id)
        {
            return db.Applies.Count(e => e.Id == id) > 0;
        }
    }
}