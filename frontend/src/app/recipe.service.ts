import { Injectable } from "@angular/core";
import { WebService } from "./web.service";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  constructor(private webService: WebService) {}

  getOneRecipe(recipeId: string) {
    return this.webService.get(`recipes/${recipeId}`);
  }

  getRecipes() {
    return this.webService.get("recipes");
  }

  createRecipe(formData: FormData) {
    return this.webService.post("recipes", formData);
  }

  updateRecipe(formData: FormData, recipeId: string) {
    return this.webService.patch(`recipes/${recipeId}`, formData);
  }

  deleteRecipe(recipeId: string) {
    return this.webService.delete(`recipes/${recipeId}`);
  }
}
