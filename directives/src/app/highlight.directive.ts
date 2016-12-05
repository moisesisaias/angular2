import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]' // this selector works just as a css selector does, we can use # or . to select using class or id attribute.
})
export class HighlightDirective implements  OnInit{
  private backgroundColor: string;

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave', ['$event']) mouseout(eventObject) { // I can also catch the event object
    console.log(eventObject.target);
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor (): string {
    return this.backgroundColor;
  } // Instead of using @HostBinding I can simply use renderer in the @HostListener

  //private renderer: Renderer; // you can create the local variable explicit or simply add private in the constructor.

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'green'; // Specifying this property name I won't have to add a different property binding to the host

  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    //  this.elementRef.nativeElement.style.backgroundColor =  'green';
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
