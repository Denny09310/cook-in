using FastEndpoints.Swagger;

namespace Recipes.Io.Extensions;

internal static class SwaggerDocumentExtensions
{
    internal static IServiceCollection ConfigureSwaggerDocument(this IServiceCollection services) =>
        services.SwaggerDocument(doc =>
        {
            doc.ShortSchemaNames = true;
            doc.EnableJWTBearerAuth = false;
        });
}
