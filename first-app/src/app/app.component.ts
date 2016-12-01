import { Component } from '@angular/core';

@Component({
  selector: 'fa-root',
  template: `
    <h1>Root Component</h1>
    <fa-databinding></fa-databinding> 
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'I changed it!';
}
