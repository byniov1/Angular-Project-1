import { RouterModule, Routes } from "@angular/router";
import { Recipe } from "./recipes/recipe.model";
import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeBookComponents } from "./recipes/recipes.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoute: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {path: 'recipes', component: RecipeBookComponents, children: 
    [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule{}