import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Potato', 40),
        new Ingredient('Tomato', 4),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    
    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}