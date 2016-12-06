import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home-component.component";
import {UserComponent} from "./user/user.component";
/**
 * Created by T_M on 12/6/2016.
 */
const APP_ROUTES: Routes = [
  { path:'', component: HomeComponent},
  { path:'user', component: UserComponent}];

export const routing = RouterModule.forRoot(APP_ROUTES);
