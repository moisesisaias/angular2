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
  items: any[] = [];
  title = 'hp works!';
  private subscription: Subscription;
  private subscription2: Subscription;
  constructor(private httpService: HttpService){

  }

  ngOnInit(){
    /*this.subscription = this.httpService.getData().subscribe( (data:any) => {
      console.log(data);
    });*/
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

  onSubmit(username: string, email: string){
    this.subscription2 = this.httpService.sendData({username: username, email: email})
      .subscribe((data:any) => console.log(data));
  }

  onGetData(){
    this.httpService.getOwnData()
      .subscribe( (data:any) => {
        const myArray =[];
        for(let key in data){
          myArray.push(data[key]);
        }

        this.items = myArray;
      });
  }
}
