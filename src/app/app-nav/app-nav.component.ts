import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatMenuTrigger } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { NotificationService } from '../notification.service';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent {
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
    isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
    
    constructor (
        private breakpointObserver: BreakpointObserver, private authService: AuthService, private notificationService: NotificationService
    ) {}

    closeBeerMenu () {
        this.trigger.closeMenu();
    }

    public isUserAuthenticated (): boolean {
        return this.authService.isAuthenticated();
    }

    public getAlertMessage (): string {
        return this.notificationService.getAlertMessage();
    }
    
}
