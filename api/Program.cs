using CookIn.Schema;

var builder = WebApplication.CreateBuilder(args);

builder.Services.ConfigureDbContext("Default");

builder.Services.AddGraphQLServer()
    .AddQueryType<Query>();
//  .AddMutationType<Mutation>()
//  .AddSubscriptionType<Subscription>();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapGraphQL();

app.MapFallbackToFile("index.html");

app.Run();
