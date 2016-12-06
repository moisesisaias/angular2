/**
 * Created by T_M on 12/6/2016.
 */
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home-component.component";
import {UserComponent} from "./user/user.component";
import {USER_ROUTES} from "./user/user.routes";

const APP_ROUTES: Routes = [
  { path:'user/:id', component: UserComponent, children: USER_ROUTES },
  { path:'user/:id', component: UserComponent },
  { path:'', component: HomeComponent },
  { path:'**', redirectTo: 'user/1', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
