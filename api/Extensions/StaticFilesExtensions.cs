using System.Net.Mime;
using Microsoft.Extensions.FileProviders;

using Path = System.IO.Path;

namespace CookIn.Extensions;

internal static class StaticFilesExtensions
{
    internal static IApplicationBuilder UseImagesStaticFiles(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();
        var configuration = scope.ServiceProvider.GetRequiredService<IConfiguration>();

        var imagesPath = configuration.GetValue<string>("ImagesPath");
        ArgumentException.ThrowIfNullOrEmpty(imagesPath);

        return app.UseStaticFiles(new StaticFileOptions()
        {
            FileProvider = new PhysicalFileProvider(Path.Combine(AppContext.BaseDirectory, imagesPath)),
            RequestPath = "/images",
            DefaultContentType = MediaTypeNames.Image.Jpeg
        });
    }
}
