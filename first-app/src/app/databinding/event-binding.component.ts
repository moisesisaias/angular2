import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {
  onClicked()
  {
    alert("It worked!");
  }
  ngOnInit() {
  }

}
