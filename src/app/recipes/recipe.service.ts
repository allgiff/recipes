import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
   

    // private recipes: Recipe[] = [
    //     new Recipe('A Test Recipe', 'This is a test', 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg', [new Ingredient('meat', 1), 
    // new Ingredient('french fries', 20)]),
    //     new Recipe('Another Test Recipe', 'This is a test', 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg', [new Ingredient('bun', 2), new Ingredient('meat', 1)])
    //   ];

    private recipes: Recipe[] = [];
    
      constructor(private slService: ShoppingListService) {

      }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}