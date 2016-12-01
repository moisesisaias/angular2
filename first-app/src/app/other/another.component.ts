import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <article>
      Content
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
    article {
      border: 1px solid black;
    }
  `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
