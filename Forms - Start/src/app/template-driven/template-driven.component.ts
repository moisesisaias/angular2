import { Component } from '@angular/core';
import {Form} from "@angular/forms";

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [
    `
      input.ng-invalid {
        border: 1px solid red;
      }
      input.ng-pristine {
        border: 1px solid #ccc;
      }
    `
  ]
})
export class TemplateDrivenComponent {
  user = {
    username: 'Name',
    password: 'password',
    email: 'example@email.com'
  };
  onSubmit(form: Form) {
    console.log(form);
    console.log(this.user);
  }
}
