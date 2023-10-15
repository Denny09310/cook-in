using System.ComponentModel;

namespace Endpoints.GetRecipes;

sealed class GetRecipesRequest
{
    [DefaultValue(1)]
    public int Page { get; set; }

    [DefaultValue(15)]
    public int PageSize { get; set; }
}

sealed class GetRecipesResponse
{
    public IEnumerable<Recipe> Recipes { get; set; } = Enumerable.Empty<Recipe>();

    public class Recipe
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
    }
}
