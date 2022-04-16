using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IEmailSender
    {
        void SendEmail(EmailMessage emailMessage);
        Task SendEmailAsync(EmailMessage emailMessage);
    }
}