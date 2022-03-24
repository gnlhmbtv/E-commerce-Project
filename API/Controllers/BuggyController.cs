using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("notfound")]
        public ActionResult GetNotFoundRequest()
        {
            var product = _context.Products.Find(22);

            if (product == null)
            {
                return NotFound(new ApiResponse(404));
            }

            return Ok();
        }


        [HttpGet("servererror")]
        public ActionResult GetServerError()
        {
            var product = _context.Products.Find(22);

            var returnProduct = product.ToString();

            if (product == null)
            {
                return NotFound();
            }

            return Ok();
        }

        [HttpGet("badrequest")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ApiResponse(400));
        }

        [HttpGet("badrequest/{id}")]
        public ActionResult GetBadRequest(int id)
        {
            return Ok();

        }
    }
}