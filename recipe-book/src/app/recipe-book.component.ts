import { Component } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'rb-root',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  providers: [ RecipeService, RouterModule ]
})
export class RecipeBookComponent {
}
