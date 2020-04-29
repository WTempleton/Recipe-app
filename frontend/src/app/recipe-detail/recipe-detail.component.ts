import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";
import Recipe from "../models/recipe";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  id: string;
  recipes: Recipe[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramsId) => {
      this.id = paramsId.recipeId;
    });
    this.recipeService.getOneRecipe(this.id).subscribe((recipe: Recipe[]) => {
      this.recipes = recipe;
    });
  }

  removeRecipe() {
    this.recipeService
      .deleteRecipe(this.id)
      .subscribe((recipe: Recipe) => this.router.navigate(["/recipes"]));
  }
}
