import { Component } from "@angular/core";

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
                    <ul class="nav navbar-nav navbar-right">
        
                        <li><a>Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `,
  styles: [`
    
  `]
})
export class HeaderComponent {
}
