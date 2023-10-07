using FastEndpoints.Swagger;
using Recipe.Io.Schema;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddFastEndpoints();
builder.Services.ConfigureSwaggerDocument();

builder.Services.AddGraphQLServer()
    .AddQueryType<Query>();
//  .AddMutationType<Mutation>()
//  .AddSubscriptionType<Subscription>();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseConfiguredEndpoints();
app.UseSwaggerGen();

app.MapGraphQL();

app.Run();
