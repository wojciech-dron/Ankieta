﻿// <auto-generated />
using System;
using Angular.api.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Ankieta.api.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("Angular.api.Models.Answer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<int>("QuestionnaireId");

                    b.Property<int?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("QuestionnaireId");

                    b.HasIndex("UserId");

                    b.ToTable("Answers");
                });

            modelBuilder.Entity("Angular.api.Models.Questionnaire", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("ExpirationAt");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Questionnaires");
                });

            modelBuilder.Entity("Angular.api.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Angular.api.Models.Answer", b =>
                {
                    b.HasOne("Angular.api.Models.Questionnaire")
                        .WithMany("Answers")
                        .HasForeignKey("QuestionnaireId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Angular.api.Models.User")
                        .WithMany("Answers")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}