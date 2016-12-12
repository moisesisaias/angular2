import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter();
  private recipes: Recipe[] = [
   /* new Recipe("Hamburger", 'Cheese and Bacon', 'http://images.media-allrecipes.com/images/58656.png', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 3)
    ]),
    new Recipe("Spaghetti", 'With meat and cheese', 'http://del.h-cdn.co/assets/16/04/980x1386/gallery-1453934758-chicken-bacon-spaghetti-delish.jpg', []),
    new Recipe("Recipe", 'Yummy', 'http://www.sesdweb.net/cms/lib06/PA01000019/Centricity/Domain/267/recipe.gif', [])*/];

  constructor(private http: Http) {
    this.fetchRecipes();
  }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(index: number): Recipe{
    return this.recipes[index];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeRecipes(){
    const body = JSON.stringify(this.recipes);
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put('https://recipebook-6c477.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchRecipes(){
    return this.http.get('https://recipebook-6c477.firebaseio.com/recipes.json')
     .map(
      (response:Response) => {
        return response.json();
      }
      ).subscribe(
        (data:Recipe[]) => {
          this.recipes = data;
          this.onRecipeChange(this.recipes);
        });
  }

  onRecipeChange(recipes: Recipe[]){
    this.recipesChanged.emit(recipes);
  }
}
