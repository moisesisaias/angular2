import { Component } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";

@Component({
  selector: 'rb-root',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  providers: [ RecipeService ]
})
export class RecipeBookComponent {
}
