import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[highlight]' // this selector works just as a css selector does, we can use # or . to select using class or id attribute.
})
export class HighlightDirective {
  private renderer: Renderer; // you can create the local variable explicit or simply add private in the constructor.

  constructor(private elementRef: ElementRef, renderer: Renderer) {
    this.renderer = renderer;
    this.elementRef.nativeElement.style.backgroundColor =  'green';

  }

}
