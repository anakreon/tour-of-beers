import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatMenuTrigger } from '@angular/material';

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

    constructor(private breakpointObserver: BreakpointObserver) { }

}
