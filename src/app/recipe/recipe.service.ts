import { Injectable } from '@angular/core';
import { Recipe } from './recipe'; 
import {Ingredient} from '../ingredient';


@Injectable()
export class RecipeService {
	private recipes : Recipe[] = [
      new Recipe('First recipe', 'test description' , 'https://static.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg', []),
      new Recipe('Second recipe', 'test description' , 'https://static.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg', []),
    ];

    constructor() { }

    getRecipes() {
    	return this.recipes;
    }

    getRecipe(id : number) {
    	return this.recipes[id];
    }

    deleteRecipe(recipe : Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }
}