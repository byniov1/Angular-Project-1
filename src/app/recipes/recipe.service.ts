import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingEditComponent } from "../shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: 'root'
})


export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe', 
            'This is simply a test', 
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2017%2F10%2FTuscan-Chicken_exps39402_SD1785600D22_RMS.jpg&f=1&nofb=1&ipt=596e34deafae5faa39ea52e91fff0e5c850a49993426fe6aec3d0faaa8d6e508&ipo=images',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another test Recipe', 
            'This is simply a test',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F01%2FQuick-Beef-Vegetable-Soup_EXPS_SBZ19_30067_B09_19_4b.jpg&f=1&nofb=1&ipt=ab97dc5cf95a5dc216b1bd3d9710157fbe79df9a1eaab89212bca218e1d08e08&ipo=images', 
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 10)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        console.log(ingredients);
        this.shoppingListService.addIngredients(ingredients)
    }

















}