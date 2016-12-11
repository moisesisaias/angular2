import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpService} from "./http.service";
import {Subscription, Observable} from "rxjs";
import {Response} from "@angular/http";

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
    this.subscription = this.http.getData().subscribe( (data:any) => {
      console.log(data);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
