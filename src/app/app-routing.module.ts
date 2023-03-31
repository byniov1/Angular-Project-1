import { RouterModule, Routes } from "@angular/router";
import { Recipe } from "./recipes/recipe.model";
import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeBookComponents } from "./recipes/recipes.component";

const appRoute: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {path: 'recipes', component: RecipeBookComponents },
    {path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule{}