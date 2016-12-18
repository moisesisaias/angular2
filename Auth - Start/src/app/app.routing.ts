/**
 * Created by T_M on 18-Dec-16.
 */

import {Routes, RouterModule} from "@angular/router";
import { SignupComponent } from "./unprotected/signup.component"
import {SigninComponent} from "./unprotected/signin.component";
import {ProtectedComponent} from "./protected/protected.component";

const APP_ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'protected', component: ProtectedComponent },
  { path:'**', redirectTo:'/signup', pathMatch:'full' }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
