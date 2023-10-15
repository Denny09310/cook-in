using CookIn.Data;
using Microsoft.EntityFrameworkCore;
using MySqlConnector;

namespace CookIn.Extensions;

internal static class DbContextExtensions
{
    internal static IServiceCollection RegisterDbContext(this IServiceCollection services, string connectionName) =>
        services.AddPooledDbContextFactory<ApplicationDbContext>((sp, opt) =>
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
