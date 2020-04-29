import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeConfigComponent } from "./recipe-config/recipe-config.component";
import { AboutComponent } from "./about/about.component";
import { BannerComponent } from "./banner/banner.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { FilterPipe } from "./recipe-list/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RecipeListComponent,
    RecipeConfigComponent,
    AboutComponent,
    BannerComponent,
    RecipeDetailComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
