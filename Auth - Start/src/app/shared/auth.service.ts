/**
 * Created by T_M on 18-Dec-16.
 */
import {User} from "./user.interface";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Subject, Observable} from "rxjs";

declare var firebase:any;

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  signupUser(user:User){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
        // ...
      });
  }

  signinUser(user:User){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
      // ...
      });
  }

  isAuthenticated(): Observable<boolean>{
    let subject = new Subject<boolean>();

    firebase.auth()
      .onAuthStateChanged( user => {
        if(user){
         subject.next(true);
        }else {
         subject.next(false);
        }
    });

    return subject.asObservable();
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }
}
