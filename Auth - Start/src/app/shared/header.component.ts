import {Component, OnDestroy} from "@angular/core";
import {AuthService} from "./auth.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'my-header',
    template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li routerLinkActive="active" 
                            [routerLinkActiveOptions]="{exact:true}">
                          <a [routerLink]="['/signup']">Sign Up</a>
                         </li>
                        <li routerLinkActive="active"
                            [routerLinkActiveOptions]="{exact:true}">
                          <a [routerLink]="['/signin']">Sign In</a>
                        </li>
                        <li routerLinkActive="active"
                            [routerLinkActiveOptions]="{exact:true}">
                            <a [routerLink]="['/protected']">Protected</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
        
                        <li style="cursor: pointer"><a (click)="onLogout()">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `
})
export class HeaderComponent implements OnDestroy{
  isAuthenticated: boolean = false;
  private authSubscription: Subscription;

  constructor(private authService: AuthService){
    this.authSubscription = this.authService.isAuthenticated().subscribe( authStatus => {
      this.isAuthenticated = authStatus;
    });
  }

  isAuth(){
    return this.isAuthenticated;
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
