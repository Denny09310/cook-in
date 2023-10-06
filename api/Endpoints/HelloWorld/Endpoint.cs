using Microsoft.AspNetCore.Authorization;

namespace Endpoints.HelloWorld;

[HttpGet("/hello-world"), AllowAnonymous]
sealed class Endpoint : EndpointWithoutRequest<Response>
{
    public override Task HandleAsync(CancellationToken ct)
    {
        return SendOkAsync(Response, ct);
    }
}