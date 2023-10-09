using CookIn.Schema;

var builder = WebApplication.CreateBuilder(args);

builder.Services.ConfigureDbContext("Default");

builder.Services.AddGraphQLServer()
    .AddQueryType<Query>();
//  .AddMutationType<Mutation>()
//  .AddSubscriptionType<Subscription>();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.MapGraphQL();

app.MapFallbackToFile("index.html");

app.Run();
