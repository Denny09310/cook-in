using FastEndpoints.Swagger;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddFastEndpoints();
builder.Services.ConfigureSwaggerDocument();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseConfiguredEndpoints();
app.UseSwaggerGen();

app.Run();
