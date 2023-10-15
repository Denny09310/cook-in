using Microsoft.AspNetCore.Authorization;

namespace Endpoints.GetRecipes;

[HttpGet("recipes/"), AllowAnonymous]
sealed class GetRecipesEndpoint : Endpoint<GetRecipesRequest, GetRecipesResponse, Mapper>
{
    private readonly ApplicationDbContext _dbContext;

    public GetRecipesEndpoint(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public override Task HandleAsync(GetRecipesRequest req, CancellationToken ct)
    {
        var skip = req.Page - 1;
        var take = req.Page * req.PageSize;

        Response.Recipes = _dbContext.Recipes.Skip(skip)
            .OrderBy(x => x.Title)
            .Take(take).Select(Map.FromEntity);

        return SendOkAsync(Response, ct);
    }
}