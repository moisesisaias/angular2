/**
 * Created by T_M on 18-Dec-16.
 */

import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean | Observable<boolean> {
    return this.authService.isAuthenticated().first();
  }
}
