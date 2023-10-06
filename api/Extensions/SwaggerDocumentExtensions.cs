using FastEndpoints.Swagger;

namespace Recipe.Io.Extensions;

internal static class SwaggerDocumentExtensions
{
    internal static IServiceCollection ConfigureSwaggerDocument(this IServiceCollection services) =>
        services.SwaggerDocument(doc =>
        {
            doc.ShortSchemaNames = true;
            doc.EnableJWTBearerAuth = false;
        });
}
