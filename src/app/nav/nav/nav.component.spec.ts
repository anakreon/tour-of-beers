import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { 
    MatCardModule, MatProgressBarModule, MatFormFieldModule, MatButtonModule, MatMenuModule, 
    MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatInputModule
} from '@angular/material';

import { AuthService } from '../../auth.service';
import { NavComponent } from './nav.component';

@Component({selector: 'app-nav-loading-bar', template: ''})
class AppNavLoadingBarComponent {}

@Component({selector: 'app-nav-notification-bar', template: ''})
class AppNavNotificationBarComponent {}

@Component({selector: 'app-nav-beer-add-card', template: ''})
class AppNavBeerAddCardComponent {}

@Component({selector: 'app-nav-user-card', template: ''})
class AppNavUserCardComponent {}

const MockAuthService = jasmine.createSpyObj('MockAuthService', ['isAuthenticated']);

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, MatCardModule, MatProgressBarModule, MatFormFieldModule, MatButtonModule, MatMenuModule, 
                MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatInputModule, BrowserAnimationsModule
            ],
            declarations: [
                NavComponent, AppNavLoadingBarComponent, AppNavNotificationBarComponent, AppNavBeerAddCardComponent, AppNavUserCardComponent
            ],
            providers: [{ 
                provide: AuthService,
                useValue: MockAuthService 
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
