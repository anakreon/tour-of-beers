import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNotificationBarComponent } from './nav-notification-bar.component';
import { Input, Component } from '@angular/core';
import { NotificationService } from '../../notification.service';

const MockNotificationService = jasmine.createSpyObj('MockNotificationService', ['getAlertMessage']);

@Component({selector: 'ngb-alert', template: ''})
class NgbAlertComponent {
    @Input('dismissible') dismissible;
}

describe('NavNotificationBarComponent', () => {
    let component: NavNotificationBarComponent;
    let fixture: ComponentFixture<NavNotificationBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavNotificationBarComponent, NgbAlertComponent],
            providers: [{
                provide: NotificationService,
                useValue: MockNotificationService
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavNotificationBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
