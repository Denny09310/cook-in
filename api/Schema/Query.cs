using CookIn.Schema.Projections;

namespace Schema;

public class Query
{
    [UsePaging(IncludeTotalCount = true)]
    [GraphQLType<ListType<GetRecipesType>>]
    public IQueryable<Recipe> GetRecipes(ApplicationDbContext dbContext) => dbContext.Recipes;

    [GraphQLType<GetRecipeIngredientsType>]
    public Recipe? GetRecipeIngredients(ApplicationDbContext dbContext, [ID] string id) =>
        dbContext.Recipes.FirstOrDefault(x => x.Id == id);
}