using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace CookIn.Models;

public class Category
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Id { get; set; } = null!;

    [StringLength(24)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [JsonIgnore]
    [InverseProperty(nameof(Recipe.Categories))]
    public virtual ICollection<Recipe> Recipes { get; set; } = new HashSet<Recipe>();
}
