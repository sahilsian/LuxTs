using Microsoft.AspNetCore.SignalR;

namespace Api.Hubs;



public class AppHub : Hub
{
    public async Task SendMessage(string username, string message)
    {
        Console.WriteLine($"{username} : {message}");
        await Clients.All.SendAsync("RecieveMessage", username, message);
    }
}