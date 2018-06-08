import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'Tour of Beers';
    private hideOnlineAlert: () => void;
    private internetDisconnectedMessage = 'Internet connection has been lost. Working offline.';

    constructor (private notificationService: NotificationService, private authService: AuthService) {}

    public ngOnInit () {
        window.addEventListener('online', () => this.updateOnlineStatus());
        window.addEventListener('offline', () => this.updateOnlineStatus());
    }
    private updateOnlineStatus () {
        if (navigator.onLine) {
            if (this.hideOnlineAlert) {
                this.hideOnlineAlert();
                this.hideOnlineAlert = null;
            }
        } else {
            this.hideOnlineAlert = this.notificationService.showAlert(this.internetDisconnectedMessage);
        }        
    }

    public shouldShowChat () {
        return this.authService.isAuthenticated();
    }
}
