using CookIn.Schema;

var builder = WebApplication.CreateBuilder(args);

builder.Services.RegisterDbContext("Default");
builder.Services.RegisterAuthentication(builder.Configuration);

builder.Services.AddAuthorization();
builder.Services.AddGraphQLServer().AddQueryType<Query>();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapGraphQL();

app.Run();
