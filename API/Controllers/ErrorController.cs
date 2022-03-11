using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ErrorController : BaseApiController
    {
        private readonly DataContext _context;
        public ErrorController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("NotFound")]
        public ActionResult GetNotFoundRequest()
        {
            var product = _context.Products.Find(22);

            if (product == null)
            {
                return NotFound();
            }

            return Ok();
        }


        [HttpGet("ServerError")]
        public ActionResult GetServerError()
        {
            var product = _context.Products.Find(22);

            var returnProduct = product.ToString();

            // if (product == null)
            // {
            //     return NotFound();
            // }

            return Ok();
        }

        [HttpGet("BadRequest")]
        public ActionResult GetBadRequest()
        {
            return BadRequest();
        }

        [HttpGet("BadRequest/{id}")]
        public ActionResult GetBadRequest(int id)
        {
            return Ok();

        }
    }
}