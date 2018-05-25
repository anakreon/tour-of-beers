import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'firebase';

@Component({
    selector: 'app-nav-user',
    templateUrl: './app-nav-user.component.html',
    styleUrls: ['./app-nav-user.component.css']
})
export class AppNavUserComponent {
    
    constructor (private authService: AuthService) {}

    public isUserAuthenticated () {
        return this.authService.isAuthenticated();
    }

    public login (): void {
        this.authService.login();
    }

    public logout (): void {
        this.authService.logout();
    }

    public getUser (): User {
        return this.authService.getUser();
    }

}
