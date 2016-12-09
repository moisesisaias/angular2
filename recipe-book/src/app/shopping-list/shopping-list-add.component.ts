import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "./shopping-list.service";
import {Ingredient} from "../ingredient";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() item: Ingredient
  isAdd: boolean = true;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if(changes.item.currentValue === null){
      this.isAdd = true;
      this.item ={name:null, amount:null};
    }else {
      this.isAdd = false;
    }
    console.log('change');
  }

  onSubmit(form: NgForm){
    let ingredient = new Ingredient(form.controls['name'].value, form.controls['amount'].value);

    if(!this.isAdd){
      // Edit
      this.sls.editItem(this.item, ingredient);
    }
    else {
      this.item = ingredient;
      this.sls.addItem(this.item);
      // form.reset();
      // this.item = null;
    }
    console.log(form);
  }

  onClear(){
    // this.item = null;
    // this.isAdd = true;
  }

}
