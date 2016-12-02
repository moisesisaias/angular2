import { Component } from '@angular/core';

@Component({
  selector: 'fa-root',
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle *ngIf="!delete"></fa-lifecycle> 
    <button (click)="delete = !delete">Click to delete</button>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  delete: boolean = false;
  title = 'I changed it!';
}
