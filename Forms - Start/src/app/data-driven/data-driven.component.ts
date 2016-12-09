import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent implements OnInit, OnDestroy{
    myForm: FormGroup;

    private subscription: Subscription;
    private subscription2: Subscription;

    genders= [
      'male',
      'female'
    ];

    constructor(private formBuilder: FormBuilder){
      // this.myForm = new FormGroup(
      //   {
      //     'userData': new FormGroup({
      //       'username': new FormControl('Max', Validators.required),
      //       'email': new FormControl('',
      //         [
      //           Validators.required,
      //           Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      //         ])
      //     }),
      //     'password': new FormControl('', Validators.required),
      //     'gender': new FormControl('male'),
      //     'hobbies': new FormArray([
      //       new FormControl('Cooking', Validators.required)
      //     ])
      //   }
      // );

      this.myForm = this.formBuilder.group({
            'userData': this.formBuilder.group({
              'username':['Max', [Validators.required, this.exampleValidator]],
              'email': ['',
                [
                  Validators.required,
                  Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]]
            }),
            'password': ['', Validators.required],
            'gender': ['male'],
            'hobbies': this.formBuilder.array([
              ['Cooking', Validators.required, this.asyncExampleValidator]
            ])
          });


    }

    ngOnInit() {
      this.subscription = this.myForm.valueChanges.subscribe( (data) => {
        console.log(data);
      });

      this.subscription2 = this.myForm.statusChanges.subscribe( (data) => {
        console.log(data);
      });

    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
      this.subscription2.unsubscribe();
    }

    onSubmit(){
      console.log(this.myForm);
    }

    onAddHobby() {
      (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidator));
    }

    exampleValidator(control: FormControl): {[c:string]: boolean} {
      if( control.value === 'Example' ){
        return {example: true}
      }
      return null;
    }

    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise<any>(
        (resolve, reject) => {
          setTimeout(
            () => {
              if(control.value === 'Example'){
                resolve({invalid: true});
              }else {
                resolve(null);
              }
            }, 1500)
        }
      );
      return promise;
    }
}
