using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace CookIn.Extensions;

internal static class AuthenticationExtensions
{
    internal static AuthenticationBuilder RegisterAuthentication(this IServiceCollection services, IConfiguration configuration) =>
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer((options) =>
                {
                    var firebaseAppId = configuration.GetValue<string>("FirebaseAppId");

                    options.Authority = $"https://securetoken.google.com/{firebaseAppId}";
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = $"https://securetoken.google.com/{firebaseAppId}",
                        ValidateAudience = true,
                        ValidAudience = firebaseAppId,
                        ValidateLifetime = true
                    };
                });
}
