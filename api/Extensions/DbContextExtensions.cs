using Microsoft.EntityFrameworkCore;
using MySqlConnector;
using Recipes.Io.Data;

namespace Recipes.Io.Extensions;

internal static class DbContextExtensions
{
    internal static IServiceCollection ConfigureDbContext(this IServiceCollection services, string connectionName) =>
        services.AddDbContextPool<ApplicationDbContext>((sp, opt) =>
        {
            var configuration = sp.GetRequiredService<IConfiguration>();
            var connectionString = configuration.GetConnectionString("Default");

            ArgumentException.ThrowIfNullOrEmpty(connectionString);

            var connectionStringBuilder = new MySqlConnectionStringBuilder(connectionString);
            var dbPassword = configuration.GetValue<string>("DefaultDbPassword");
            ArgumentException.ThrowIfNullOrEmpty(dbPassword);

            connectionStringBuilder.Password = dbPassword;
            connectionString = connectionStringBuilder.ToString();

            opt.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
        });
}
