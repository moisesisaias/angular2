import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component! 
    </h1>
    <p *ngIf="!!param"> Query Param: {{param}}</p>
    <div id="section1">Section1</div>
  `,
  styles: []
})
export class HomeComponent implements OnDestroy{
  private subscription: Subscription;

  param: string;

  constructor(private route: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
