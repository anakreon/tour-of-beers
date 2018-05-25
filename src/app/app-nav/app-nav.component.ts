import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatMenuTrigger } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent {
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
    isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

    closeBeerMenu () {
        this.trigger.closeMenu();
    }

    constructor (private breakpointObserver: BreakpointObserver, private authService: AuthService) {}

    public isUserAuthenticated (): boolean {
        return this.authService.isAuthenticated();
    }
    
}
