/**
 * Created by T_M on 12/6/2016.
 */
import { Routes } from "@angular/router";
import {UserDetailComponent} from "./user-detail.component";
import {UserEditComponent} from "./user-edit.component";

export const USER_ROUTES: Routes = [
  {path:'detail', component: UserDetailComponent},
  {path:'edit', component: UserEditComponent}
];
