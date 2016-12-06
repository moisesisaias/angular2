import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CanDeactivateComponent} from "./user-edit.guard";
import {Observable} from "rxjs";

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="done = true">Done</button>
        <button class="btn btn-alert" (click)="onNavigate()">Go home</button>
    `
})
export class UserEditComponent implements CanDeactivateComponent{
  private done: boolean = false;

  constructor(private router: Router){

  }

  onNavigate(){
    this.router.navigate(['/'],{queryParams:{'analytics': 100}, fragment: 'section1'});
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(!this.done){
      return confirm('Do you want to leave?');
    }
    return true;
  }
}
