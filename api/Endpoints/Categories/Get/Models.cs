namespace Endpoints.GetCategories;

sealed class GetCategoriesResponse
{
    public IEnumerable<Category> Categories { get; set; } = Enumerable.Empty<Category>();
}
