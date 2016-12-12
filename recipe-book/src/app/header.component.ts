import { Component, OnInit } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onStoreData(){
    this.recipeService.storeRecipes().subscribe(
      (data:any) =>{
        console.log('Recipes were stored:');
      },
      (error:any) => {
        console.log(error);
      }
      );
  }

  onRetrieveData(){
    this.recipeService.fetchRecipes();
  }

}
