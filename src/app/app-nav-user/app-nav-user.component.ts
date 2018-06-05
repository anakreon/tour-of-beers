import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ObservableMedia } from '@angular/flex-layout';
import { User } from '@firebase/auth-types';

@Component({
    selector: 'app-nav-user',
    templateUrl: './app-nav-user.component.html',
    styleUrls: ['./app-nav-user.component.css']
})
export class AppNavUserComponent {
    
    constructor (private authService: AuthService, private observableMedia: ObservableMedia) {}

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

    public shouldShowCardText () {
        return !this.observableMedia.isActive('xs');
    }

}
