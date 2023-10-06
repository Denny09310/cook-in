using System.Text.Json.Serialization;

namespace Recipe.Io.Extensions;

internal static class FastEndpointsExtensions
{
    internal static IApplicationBuilder UseConfiguredEndpoints(this IApplicationBuilder app) =>
        app.UseFastEndpoints(config =>
        {
            config.Endpoints.RoutePrefix = "api";
            config.Endpoints.ShortNames = true;
            config.Endpoints.Configurator = ep =>
                ep.Description(d => d.WithName(ep.EndpointType.Name
                    .Replace("Endpoint", string.Empty)));

            config.Serializer.Options.ReferenceHandler = ReferenceHandler.IgnoreCycles;
        });
}
