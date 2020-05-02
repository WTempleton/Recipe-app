import { Component, OnInit } from "@angular/core";
import Recipe from "../models/recipe";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  searchText: string = "";
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService
      .getRecipes()
      .subscribe((recipes: Recipe[]) => (this.recipes = recipes));
  }

  consoleLog() {
    console.log(this.searchText);
  }
}
