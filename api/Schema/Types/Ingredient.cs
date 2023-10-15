using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Schema.Types;

public class Ingredient
{
    [Key]
    [Unicode(false)]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Id { get; set; } = null!;

    [Required]
    public string Value { get; set; } = null!;

    [Required]
    [Unicode(false)]
    public string RecipeId { get; set; } = null!;

    [ForeignKey(nameof(RecipeId))]
    public virtual Recipe Recipe { get; set; } = new();
}
