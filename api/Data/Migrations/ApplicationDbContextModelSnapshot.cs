﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Recipes.Io.Data;

#nullable disable

namespace Recipes.Io.Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Recipes.Io.Schema.Types.Ingredient", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)");

                    b.Property<string>("RecipeId")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("RecipeId");

                    b.ToTable("Ingredients");
                });

            modelBuilder.Entity("Recipes.Io.Schema.Types.Recipe", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .IsUnicode(false)
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Recipes");
                });

            modelBuilder.Entity("Recipes.Io.Schema.Types.Ingredient", b =>
                {
                    b.HasOne("Recipes.Io.Schema.Types.Recipe", "Recipe")
                        .WithMany("Ingredients")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Recipe");
                });

            modelBuilder.Entity("Recipes.Io.Schema.Types.Recipe", b =>
                {
                    b.Navigation("Ingredients");
                });
#pragma warning restore 612, 618
        }
    }
}
