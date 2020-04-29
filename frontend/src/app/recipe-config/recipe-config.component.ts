import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Router, ActivatedRoute } from "@angular/router";
import Recipe from "../models/recipe";

@Component({
  selector: "app-recipe-config",
  templateUrl: "./recipe-config.component.html",
  styleUrls: ["./recipe-config.component.css"],
})
export class RecipeConfigComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  public id: string;
  recipeName: string = "";
  preparationTime: string = "";
  servingsNumber: string = "";
  ingredients: string = "";
  directions: string = "";
  image: File;
  recipes: Recipe[] = [
    {
      _id: this.id,
      title: this.recipeName,
      time: this.preparationTime,
      servings: this.servingsNumber,
      ingredients: this.ingredients,
      directions: this.directions,
      picture: this.image,
      /* Not great but enables loading of form if no id is specified */
    },
  ];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramsId) => {
      this.id = paramsId.recipeId;
    });
    if (this.id) {
      this.recipeService.getOneRecipe(this.id).subscribe((recipe: Recipe[]) => {
        this.recipes = recipe;
      });
    }
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }
  /* tbd: create function(s) to prevent forms with empty datafields to be submitted*/
  addOrChangeRecipe(
    title: string,
    servings: string,
    time: string,
    ingredients: string,
    directions: string
  ) {
    const formData: any = new FormData();
    formData.append("title", title);
    formData.append("servings", servings);
    formData.append("time", time);
    formData.append("ingredients", ingredients);
    formData.append("directions", directions);
    formData.append("imageInput", this.image, this.image.name);
    if (this.id) {
      this.recipeService
        .updateRecipe(formData, this.id)
        .subscribe((recipe: Recipe) =>
          this.router.navigate(["/recipes", recipe._id])
        );
      return;
    }

    this.recipeService
      .createRecipe(formData)
      .subscribe((recipe: Recipe) =>
        this.router.navigate(["/recipes", recipe._id])
      );
  }
}
