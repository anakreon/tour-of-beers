import { Component } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { User } from '@firebase/auth-types';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-nav-user-card',
    templateUrl: './nav-user-card.component.html',
    styleUrls: ['./nav-user-card.component.css']
})
export class NavUserCardComponent {
    
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
