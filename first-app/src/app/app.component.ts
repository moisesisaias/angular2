import { Component } from '@angular/core';

@Component({
  selector: 'fa-root',
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle (deleteComponent)="delete = $event" *ngIf="!delete"></fa-lifecycle> 
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
