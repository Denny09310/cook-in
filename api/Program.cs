using FastEndpoints.Swagger;

var builder = WebApplication.CreateBuilder(args);

builder.Services.RegisterDbContext("Default");
builder.Services.RegisterAuthentication(builder.Configuration);

builder.Services.RegisterEndpoints();
builder.Services.RegisterSwaggerDocument();

builder.Services.AddHttpContextAccessor();
builder.Services.AddAuthorization();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseImagesStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseRegisteredEndpoints();
app.UseSwaggerGen();

app.MapFallbackToFile("index.html");

app.Run();
