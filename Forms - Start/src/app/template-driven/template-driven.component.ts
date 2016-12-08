import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

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
    email: 'example@email.com',
    gender: 'male'
  };

  genders = ['male', 'female'];

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.user);
  }
}
