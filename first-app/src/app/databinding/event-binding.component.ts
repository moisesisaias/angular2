import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
    <button (click)="changeString()">Click me to change interpolation string!</button>
    
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  @Output() summitChange = new EventEmitter<string>();
 
  onClicked()  {
    this.clicked.emit('It works!');
    //alert("It worked!");
  }

  changeString(){
    this.summitChange.emit('Changed interpolation string');
    this.onClicked();
  }

  ngOnInit() {
  }

}
