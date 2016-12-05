import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]' // this selector works just as a css selector does, we can use # or . to select using class or id attribute.
})
export class HighlightDirective {
  private backgroundColor: string = 'white';

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave', ['$event']) mouseout(eventObject) { // I can also catch the event object
    console.log(eventObject.target);
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor (): string {
    return this.backgroundColor;
  } // Instead of using @HostBinding I can simply use renderer in the @HostListener

  //private renderer: Renderer; // you can create the local variable explicit or simply add private in the constructor.

  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    //  this.elementRef.nativeElement.style.backgroundColor =  'green';

  }

}
