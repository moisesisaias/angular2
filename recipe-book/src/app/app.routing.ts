/**
 * Created by T_M on 12/6/2016.
 */
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from "./recipes/recipe.routes";

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'/recipes', pathMatch: 'full'},
  {path:'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
  {path:'shop-list', component: ShoppingListComponent},
  {path:'**', redirectTo:'', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
