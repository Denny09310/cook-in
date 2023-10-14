var builder = WebApplication.CreateBuilder(args);

builder.Services.RegisterDbContext("Default");
builder.Services.RegisterAuthentication(builder.Configuration);

builder.Services.AddHttpContextAccessor();
builder.Services.AddAuthorization();
builder.Services.AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddSubscriptionType<Subscription>()
    .AddMutationConventions(applyToAllMutations: false)
    .AddInMemorySubscriptions()
    .RegisterDbContext<ApplicationDbContext>(DbContextKind.Pooled)
    .ModifyRequestOptions(x => x.IncludeExceptionDetails = builder.Environment.IsDevelopment());

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseWebSockets();

app.MapGraphQL();

app.MapFallbackToFile("index.html");

app.Run();
