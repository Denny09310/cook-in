using Microsoft.EntityFrameworkCore;

namespace Recipe.Io.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }
}
