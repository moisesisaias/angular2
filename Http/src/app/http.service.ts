import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData(){
    return this.http.get('https://angular2-course-a6739.firebaseio.com/title.json')
      .map((response: Response) => {
        return response.json();
      });
  }

  sendData(user: any){
    const body = JSON.stringify(user);
    let headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post('https://angular2-course-a6739.firebaseio.com/data.json', body, headers)
      .map( (response) => response.json())
      .catch(this.errorHandler);
  }

  getOwnData(){
    return this.http.get("https://angular2-course-a6739.firebaseio.com/data.json")
      .map((response) => {
        return response.json();
      });
  }

  private errorHandler(error: any){
    console.log(error);

    return Observable.throw(error.json());
  }
}
