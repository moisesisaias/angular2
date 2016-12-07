import { Component } from '@angular/core';
import {Form} from "@angular/forms";

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html'
})
export class TemplateDrivenComponent {
  user = {
    username: '',
    password: '',
    email: ''
  };
  onSubmit(form: Form) {
    console.log(form);
  }
}
