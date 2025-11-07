using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
public class Authentication
{
    public static void Signin(HttpContext context)
    {
        context.SignInAsync(new ClaimsPrincipal(
            new ClaimsIdentity(
                [new Claim("user_id", Guid.NewGuid().ToString())],
                "cookie"
            )
        ));
    }
}