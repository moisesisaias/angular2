/**
 * Created by T_M on 12/6/2016.
 */

import {CanDeactivate} from "@angular/router";
import {Observable} from "rxjs";

export interface CanDeactivateComponent {
  canDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<CanDeactivateComponent>{
  canDeactivate(component: CanDeactivateComponent): Observable<boolean> | boolean  {
    return component.canDeactivate ? component.canDeactivate() : true ;
  }
}
