import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { ObservableMedia } from '@angular/flex-layout';

@Component({selector: 'app-nav', template: ''})
class AppNavComponent {}

@Component({selector: 'app-chat', template: ''})
class AppChatComponent {}

const MockAuthService = jasmine.createSpyObj('MockAuthService', ['isAuthenticated'])
const MockNotificationService = jasmine.createSpyObj('MockNotificationService', ['showAlert']);
const MockObservableMedia = jasmine.createSpyObj('MockObservableMedia', ['isActive']);

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, AppNavComponent, AppChatComponent
            ],
            providers: [{ 
                provide: AuthService,
                useValue: MockAuthService 
            }, { 
                provide: NotificationService,
                useValue: MockNotificationService 
            }, { 
                provide: ObservableMedia,
                useValue: MockObservableMedia 
            }]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Tour of Beers');
    }));
    /*it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-nav').textContent).toBe('');
    }));*/
});
