import { Component, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
      {{id}}
    `
})
export class UserComponent {
  id:string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute){
     this.id = this.activatedRouter.snapshot.params['id'];
  }

  onNavigate(){
    this.router.navigate(['/']);
  }
}
