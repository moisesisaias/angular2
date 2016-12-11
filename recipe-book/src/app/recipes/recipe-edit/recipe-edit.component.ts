import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
    private formBuilder: FormBuilder,
    private router: Router) {

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

  onSubmit(){
    const newRecipe: Recipe= this.recipeForm.value;
    if(this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    }else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCancel(){
    if(confirm('Are you sure?')){
      this.navigateBack();
    }
  }

  onDeleteItem(index: number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  onAddItem(name: string, amount: string){
    (<FormArray>this.recipeForm.controls['ingredients']).push(new FormGroup ({
      'name': new FormControl(name, [Validators.required]),
      'amount': new FormControl(amount, [Validators.required,
        Validators.pattern('\\d+')])
    }))
  }

  navigateBack() {
    this.router.navigate(['../']);
  }


  private initForm() {
    let recipeName:string = '';
    let recipeImagePath:string = '';
    let recipeContent: string= '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew){
      for(let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(new FormGroup ({
          'name': new FormControl(this.recipe.ingredients[i].name, [Validators.required]),
          'amount': new FormControl(this.recipe.ingredients[i].amount, [Validators.required,
            Validators.pattern('\\d+')])
        }));
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
