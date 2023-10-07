using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recipes.Io.Schema.Types;

public class Recipe
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Id { get; set; } = null!;

    [Required]
    [Unicode(false)]
    public string Title { get; set; } = null!;

    [InverseProperty(nameof(Ingredient.Recipe))]
    public virtual ICollection<Ingredient> Ingredients { get; set; } = new HashSet<Ingredient>();
}
