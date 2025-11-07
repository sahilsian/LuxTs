using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

//Add Cookie Authentication
builder.Services.AddAuthentication()
    .AddCookie("cookie");

var app = builder.Build();

app.MapGet("/login", () => Results.SignIn(
    new ClaimsPrincipal(
        new ClaimsIdentity(
            [new Claim("user_id", Guid.NewGuid().ToString())],
            "cookie"
        )
    ),

    authenticationScheme: "cooke"
));

app.Run();
