import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =  [
    new Recipe("Hamburger", 'Cheese and Bacon', 'http://images.media-allrecipes.com/images/58656.png', []),
    new Recipe("Spaghetti", 'With meat and cheese', 'http://del.h-cdn.co/assets/16/04/980x1386/gallery-1453934758-chicken-bacon-spaghetti-delish.jpg', []),
    new Recipe("Recipe", 'Yummy', 'http://www.sesdweb.net/cms/lib06/PA01000019/Centricity/Domain/267/recipe.gif', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
