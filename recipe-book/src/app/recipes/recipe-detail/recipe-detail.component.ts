import {Component, OnInit,OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeId: number;
  selectedRecipe: Recipe;
  constructor(private sls: ShoppingListService, private activatedRoute: ActivatedRoute,
              private recipesService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe( (params:any) => {
      this.recipeId = params['id'];
      this.selectedRecipe = this.recipesService.getRecipe(this.recipeId);
    });

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onDelete(){
    this.recipesService.deleteRecipe(this.selectedRecipe);
    console.log('recipe '+ this.recipeId +' was deleted');
    this.router.navigate(['/recipes']);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeId, 'edit']);
  }

}
