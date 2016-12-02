import { Component, 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Output, 
  EventEmitter, 
  Input
 } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
    <button (click)="delete()">Click to delete</button>
    <ng-content></ng-content>
    <hr>
    {{ bindable }}
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
 AfterViewChecked, OnDestroy {
   @Output() deleteComponent = new EventEmitter<boolean>();
   @Input() bindable = 1000;

   delete(){
     this.deleteComponent.emit(true);
   }

  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }
  
  ngDoCheck(){
    this.log('ngDoCheck');

  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
