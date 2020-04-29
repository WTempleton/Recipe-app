import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeConfigComponent } from "./recipe-config/recipe-config.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "recipes", component: RecipeListComponent },
  { path: "recipes/create", component: RecipeConfigComponent },
  { path: "recipes/change/:recipeId", component: RecipeConfigComponent },
  { path: "recipes/:recipeId", component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
