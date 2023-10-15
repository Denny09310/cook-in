namespace Schema;

public class Query
{
    [UsePaging(IncludeTotalCount = true)]
    [GraphQLType<ListType<GetRecipesType>>]
    public IQueryable<Recipe> GetRecipes(ApplicationDbContext dbContext) => dbContext.Recipes;
}