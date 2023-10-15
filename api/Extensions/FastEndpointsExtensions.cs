using System.Text.Json.Serialization;
using FastEndpoints.Swagger;

namespace CookIn.Extensions;

internal static class FastEndpointsExtensions
{
    internal static IServiceCollection RegisterEndpoints(this IServiceCollection services)
        => services.AddFastEndpoints(opt =>
        {
            opt.SourceGeneratorDiscoveredTypes.AddRange(DiscoveredTypes.All);
        });

    internal static IServiceCollection RegisterSwaggerDocument(this IServiceCollection services) =>
        services.SwaggerDocument(doc =>
        {
            doc.ShortSchemaNames = true;
        });

    internal static IApplicationBuilder UseRegisteredEndpoints(this IApplicationBuilder app) =>
        app.UseFastEndpoints(opt =>
        {
            opt.Endpoints.RoutePrefix = "api";
            opt.Endpoints.ShortNames = true;
            opt.Endpoints.Configurator = ep =>
                ep.Description(d => d.WithName(ep.EndpointType.Name
                    .Replace("Endpoint", string.Empty)));

            opt.Serializer.Options.ReferenceHandler = ReferenceHandler.IgnoreCycles;
        });
}
