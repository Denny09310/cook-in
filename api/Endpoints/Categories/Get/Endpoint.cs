using Microsoft.AspNetCore.Authorization;

namespace Endpoints.GetCategories;

[HttpGet("categories/"), AllowAnonymous]
sealed class GetCategoriesEndpoint : EndpointWithoutRequest<GetCategoriesResponse>
{
    private readonly ApplicationDbContext _dbContext;

    public GetCategoriesEndpoint(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public override Task HandleAsync(CancellationToken ct)
    {
        Response.Categories = _dbContext.Categories;
        return SendOkAsync(Response, ct);
    }
}