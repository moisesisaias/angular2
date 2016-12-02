import { Component} from '@angular/core';

@Component({
  selector: 'fa-two-way-databinding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">    
  `
})
export class TwoWayBindingComponent{
  person = {
    name: "Moisés",
    age: 21
  }
}
