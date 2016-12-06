import { Component, OnDestroy } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['/user']">User</a>
      <button (click)="onNavigate()">Go Home</button>
    `
})
export class UserComponent {
  constructor(private router: Router){

  }

  onNavigate(){
    this.router.navigate(['/']);
  }
}
