using HotChocolate.Resolvers;
using Microsoft.EntityFrameworkCore;

namespace CookIn.Schema.Projections;

public class GetRecipeIngredientsType : ObjectType<Recipe>
{
    protected override void Configure(IObjectTypeDescriptor<Recipe> descriptor)
    {
        descriptor.Name(nameof(GetRecipeIngredientsType));

        descriptor.BindFieldsExplicitly();

        descriptor.Field(x => x.Id);
        descriptor.Field(x => x.Ingredients)
            .Type<ListType<IngredientType>>()
            .Resolve(GetIngredientsAsync);
    }

    private async Task<ICollection<Ingredient>> GetIngredientsAsync(IResolverContext ctx, CancellationToken cancellationToken)
    {
        var dbContextFactory = ctx.Services.GetRequiredService<IDbContextFactory<ApplicationDbContext>>();
        var recipeId = ctx.Parent<Recipe>().Id;

        using var dbContext = await dbContextFactory.CreateDbContextAsync(cancellationToken);
        return await dbContext.Ingredients
            .Where(x => x.RecipeId == recipeId)
            .ToListAsync(cancellationToken);
    }
}

class IngredientType : ObjectType<Ingredient>
{
    protected override void Configure(IObjectTypeDescriptor<Ingredient> descriptor)
    {
        descriptor.Ignore(x => x.Id);
        descriptor.Ignore(x => x.Recipe);
        descriptor.Ignore(x => x.RecipeId);
    }
}