namespace Endpoints.GetRecipes;

sealed class Mapper : Mapper<GetRecipesRequest, GetRecipesResponse.Recipe, Recipe>
{
    public override GetRecipesResponse.Recipe FromEntity(Recipe e) => new()
    {
        Id = e.Id,
        Image = e.Image,
        Title = e.Title
    };
}