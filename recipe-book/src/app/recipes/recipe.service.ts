import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Hamburger", 'Cheese and Bacon', 'http://images.media-allrecipes.com/images/58656.png', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 3)
    ]),
    new Recipe("Spaghetti", 'With meat and cheese', 'http://del.h-cdn.co/assets/16/04/980x1386/gallery-1453934758-chicken-bacon-spaghetti-delish.jpg', []),
    new Recipe("Recipe", 'Yummy', 'http://www.sesdweb.net/cms/lib06/PA01000019/Centricity/Domain/267/recipe.gif', [])];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
