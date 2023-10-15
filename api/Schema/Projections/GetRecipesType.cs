using HotChocolate.Resolvers;
using Microsoft.AspNetCore.Http.Extensions;

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

        var request = httpContext!.Request;
        var baseUrl = $"{request.Scheme}://{request.Host}{request.PathBase}";

        return $"{baseUrl}/images/{image}.jpg";
    }
}