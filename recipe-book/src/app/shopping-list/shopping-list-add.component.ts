import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "./shopping-list.service";
import {Ingredient} from "../ingredient";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit {
  isAdd: boolean = true;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  onAdd(form: NgForm){
    this.sls.addItems([new Ingredient(form.controls['name'].value, form.controls['amount'].value)]);
    form.reset({'name':'', 'amount':''});
  }

}
