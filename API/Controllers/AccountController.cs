using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using API.Dto;
using API.Errors;
using API.Extensions;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        private readonly IEmailSender _emailSender;
        private readonly IConfiguration _config;
        private readonly HttpClient _httpClient;


        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager,
        ITokenService tokenService, IMapper mapper, IEmailSender emailSender, IConfiguration config)
        {
            _config = config;
            _emailSender = emailSender;
            _mapper = mapper;
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;
            _httpClient = new HttpClient
            
            {
                BaseAddress = new System.Uri("https://graph.facebook.com")
            };
        }

        // [Authorize]
        [HttpGet("getusers")]
        public async Task<ActionResult> GetUsers()
        {
            var users = await _userManager.Users.ToListAsync();
            return Ok(users);
        }


        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailFromClaimsPrinciple(HttpContext.User);

            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
                DisplayName = user.DisplayName
            };
        }

        [HttpGet("emailexists")]
        public async Task<ActionResult<bool>> CheckEmailExistsAsync([FromQuery] string email)
        {
            return await _userManager.FindByEmailAsync(email) != null;
        }

        [HttpGet("address")]
        public async Task<ActionResult<AddressDto>> GetUserAddress()
        {
            var user = await _userManager.FindByEmailWithAddressAsync(HttpContext.User);

            return _mapper.Map<Address, AddressDto>(user.Address);
        }

        [Authorize]
        [HttpPut("address")]
        public async Task<ActionResult<AddressDto>> UpdateAddress(AddressDto address)
        {
            var user = await _userManager.FindByEmailWithAddressAsync(HttpContext.User);

            user.Address = _mapper.Map<AddressDto, Address>(address);

            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded) return Ok(_mapper.Map<Address, AddressDto>(user.Address));

            return BadRequest("Problem updating with user");
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null) return Unauthorized(new ApiResponse(401));

  
            if (!await _userManager.IsEmailConfirmedAsync(user))
                return Unauthorized("Email is not confirmed");
          

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded) return Unauthorized(new ApiResponse(401));

            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
                DisplayName = user.DisplayName
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (CheckEmailExistsAsync(registerDto.Email).Result.Value)
            {
                return new BadRequestObjectResult(new ApiValidationError { Errors = new[] { "Email address is in used" } });
            }

            var user = new AppUser
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.Email
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded) return BadRequest(new ApiResponse(400));
            
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            var param = new Dictionary<string, string>
            {
                {"token", token },
                {"email", user.Email }
            };
            var callback = QueryHelpers.AddQueryString(registerDto.ClientURI, param);
            var message = new EmailMessage(new string[] { user.Email }, "Email Confirmation token", callback, null);
            await _emailSender.SendEmailAsync(message);
            return new UserDto
            {
                DisplayName = user.DisplayName,
                Token = _tokenService.CreateToken(user),
                Email = user.Email
            };
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordDto forgotPasswordDto)
        {
            if (!ModelState.IsValid) return BadRequest();

            var user = await _userManager.FindByEmailAsync(forgotPasswordDto.Email);

            if (user == null) return BadRequest("Invalid Request");

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);

            var param = new Dictionary<string, string>
            {
                {"token", token},
                {"email", forgotPasswordDto.Email}
            };

            var callback = QueryHelpers.AddQueryString(forgotPasswordDto.ClientUri, param);

            var message = new EmailMessage(new string[] { user.Email }, "Reset password token", callback, null);

            await _emailSender.SendEmailAsync(message);

            return Ok();
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto resetPasswordDto)
        {
            if (!ModelState.IsValid) return BadRequest();

            var user = await _userManager.FindByEmailAsync(resetPasswordDto.Email);

            if (user == null) return BadRequest("Invalid Request");

            var resetPasswordResult =
                await _userManager.ResetPasswordAsync(user, resetPasswordDto.Token, resetPasswordDto.Password);

            if (!resetPasswordResult.Succeeded)
            {
                var errors = resetPasswordResult.Errors.Select(e => e.Description);

                return BadRequest(new { Errors = errors });
            }

            return Ok();
        }

        [HttpPost("fbLogin")]
        public async Task<ActionResult<UserDto>> FacebookLogin(string accessToken)
        {
            var fbVerifyKeys = _config["Facebook:AppId"] + "|" + _config["Facebook:AppSecret"];

            var verifyToken = await _httpClient
                .GetAsync($"debug_token?input_token={accessToken}&access_token={fbVerifyKeys}");

            if (!verifyToken.IsSuccessStatusCode) return Unauthorized();

            var fbUrl = $"me?access_token={accessToken}&fields=name,email,picture.width(100).height(100)";

            var response = await _httpClient.GetAsync(fbUrl);

            if (!response.IsSuccessStatusCode) return Unauthorized();

            var fbInfo = JsonConvert.DeserializeObject<dynamic>(await response.Content.ReadAsStringAsync());

            var username = (string) fbInfo.name;

            var user = await _userManager.Users
                .FirstOrDefaultAsync(u => u.DisplayName == username);

            if (user != null) return await CreateUserObject(user);

            user = new AppUser
            {
                DisplayName = (string) fbInfo.name,
                Email = (string) fbInfo.email,
                UserName = (string) fbInfo.email,
            };

            user.EmailConfirmed = true;

            var result = await _userManager.CreateAsync(user); // Invalid Username

            if (!result.Succeeded) return BadRequest("Problem creating user account");

            return await CreateUserObject(user);
        }

         private async Task<UserDto> CreateUserObject(AppUser user)
        {
            return new UserDto
            {
                DisplayName = user.DisplayName,
                Token = _tokenService.CreateToken(user),
                Email = user.Email
            };
        }


        [HttpGet("EmailConfirmation")]
        public async Task<IActionResult> EmailConfirmation([FromQuery] string email, [FromQuery] string token)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null) return BadRequest("Invalid Email Confirmation Request");

            var confirmResult = await _userManager.ConfirmEmailAsync(user, token);

            if (!confirmResult.Succeeded) return BadRequest("Invalid Email Confirmation Request");

            return Ok();
        }

    }
}
