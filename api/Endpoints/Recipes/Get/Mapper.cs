namespace Endpoints.GetRecipes;

sealed class Mapper : Mapper<GetRecipesRequest, GetRecipesResponse.Recipe, Recipe>
{
    private readonly IHttpContextAccessor _accessor;

    public Mapper(IHttpContextAccessor accessor)
    {
        _accessor = accessor;
    }

    public override GetRecipesResponse.Recipe FromEntity(Recipe e)
    {
        var httpContext = _accessor.HttpContext;

        var request = httpContext!.Request;
        var baseUrl = $"{request.Scheme}://{request.Host}{request.PathBase}/images";

        return new()
        {
            Id = e.Id,
            Image = $"{baseUrl}/{e.Image}.jpg",
            Title = e.Title
        };
    }
}