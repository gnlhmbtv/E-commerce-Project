using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
            StatusCode = statusCode;
        }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Bad request",
                401 => "Unauthorized",
                404 => "Not found",
                500 => "Server error",
                _   => null
            };
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
    }
}