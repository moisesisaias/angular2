import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormArray, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private subscription: Subscription;
  private recipeId: number;
  private recipe: Recipe;
  private isNew: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.subscription =  this.activatedRoute.params.subscribe( (params:any) => {
        if(params.hasOwnProperty('id')){
          this.recipeId = params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeId);
          this.isNew = false;
        } else {
          this.isNew = true;
        }
        this.initForm();
      }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    let recipeName:string = '';
    let recipeImagePath:string = '';
    let recipeContent: string= '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew){
      for(let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(new FormGroup ({
          'name': new FormControl([this.recipe.ingredients[i].name, Validators.required]),
          'amount': new FormControl([this.recipe.ingredients[i].amount, Validators.required,
            Validators.pattern('\\d+')])
        }));
        console.log(this.recipe.ingredients[i].name);
        console.log(this.recipe.ingredients[i].amount);
      }
      recipeName = this.recipe.name;
      recipeContent = this.recipe.description;
      recipeImagePath = this.recipe.imagePath;
    }

    this.recipeForm = this.formBuilder.group(
      {
        'name': [recipeName, Validators.required],
        'description':[recipeContent, Validators.required],
        'imagePath':[recipeImagePath, Validators.required],
        'ingredients': recipeIngredients

      });
  }

}
