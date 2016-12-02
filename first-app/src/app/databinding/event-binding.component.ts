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
  /*
  I can give a different name for my event outside of this class. For instance:
  
  @Output('summitCh') summitChange = new EventEmitter<string>();
  
  In this case I have to identify this event as (summitCh) when a I want to listen to it
  with the component. And I think that I can do it with the properties as well.
  */
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
