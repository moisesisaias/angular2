import { Component, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
      {{id}}
    `
})
export class UserComponent implements OnDestroy{
  id:string;
  private subscription: Subscription;

  constructor(private router: Router, private activatedRouter: ActivatedRoute){
     //this.id = this.activatedRouter.snapshot.params['id'];
    this.subscription = this.activatedRouter.params.subscribe( (params:any) => {this.id = params['id']});
  }

  onNavigate(){
    this.router.navigate(['/']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
