import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpService} from "./http.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'hp-root',
  templateUrl: 'http.component.html',
  providers: [HttpService]
})
export class HttpComponent implements OnInit, OnDestroy{
  title = 'hp works!';
  private subscription: Subscription;
  constructor(private http: HttpService){

  }

  ngOnInit(){
    this.subscription = this.http.getData().subscribe( response => {
      console.log(response);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
