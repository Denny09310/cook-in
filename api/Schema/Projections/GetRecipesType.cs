using HotChocolate.Resolvers;

namespace Schema.Projections;

public class GetRecipesType : ObjectType<Recipe>
{
    protected override void Configure(IObjectTypeDescriptor<Recipe> descriptor)
    {
        descriptor.Name(nameof(GetRecipesType));

        descriptor.Ignore(x => x.Ingredients);
        descriptor.Ignore(x => x.Instructions);

        descriptor.Field(x => x.Image).Resolve(GetImageUrl);
    }

    private string GetImageUrl(IResolverContext ctx)
    {
        var httpContext = ctx.Services.GetRequiredService<IHttpContextAccessor>().HttpContext;
        var image = ctx.Parent<Recipe>().Image;

        return $"{httpContext!.Request.Path}/{image}.jpg";
    }
}