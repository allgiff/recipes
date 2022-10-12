import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    receipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'),
        new Recipe('Another Test Recipe', 'This is a test', 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg')
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}