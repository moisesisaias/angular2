import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items: number [] = [1, 2, 3, 4, 5];

  private switch: boolean = true;

  private value: number = 100;

  private onSwitch(){
    this.switch = !this.switch;
  }
}
