import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
  @Input() set unless (conditional: boolean){
    if(!conditional){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
