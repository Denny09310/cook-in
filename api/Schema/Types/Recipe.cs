using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Schema.Types;

public class Recipe
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Id { get; set; } = null!;

    [Required]
    [Unicode(false)]
    public string Title { get; set; } = null!;

    [Required]
    [Unicode(false)]
    public string Instructions { get; set; } = null!;

    [Required]
    [Unicode(false)]
    public string Image { get; set; } = null!;

    [InverseProperty(nameof(Ingredient.Recipe))]
    public virtual ICollection<Ingredient> Ingredients { get; set; } = new HashSet<Ingredient>();
}
