import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  stringInterpolation: string = "This is string interpolation";
  numberInterpolation: number = 10;

  onTest() : boolean{
    return true;
  }
  ngOnInit() {
  }

}
