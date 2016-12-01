import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  @Input() result: number = 1;

  ngOnInit() {
  }

}
