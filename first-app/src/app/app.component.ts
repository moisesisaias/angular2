import { Component } from '@angular/core';

@Component({
  selector: 'fa-root',
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle (deleteComponent)="delete = $event" *ngIf="!delete" [bindable]="boundValue">
      <p>{{test}}</p>
    </fa-lifecycle> 
    <br>
    <button (click)="test = 'Changed value'">Click to change content</button>
    <button (click)="boundValue = 2000">Click to change binding</button>
    
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
  test: string = 'Starting Value';
  boundValue = 1000;
}
