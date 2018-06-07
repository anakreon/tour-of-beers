import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatButtonModule, MatMenuModule } from '@angular/material';

import { NavUserCardComponent } from './nav-user-card.component';
import { AuthService } from '../../auth.service';
import { ObservableMedia } from '@angular/flex-layout';

const MockAuthService = jasmine.createSpyObj('MockAuthService', ['isAuthenticated', 'login', 'logout', 'getUser']);
const MockObservableMedia = jasmine.createSpyObj('MockAuthService', ['isActive']);

describe('NavUserCardComponent', () => {
    let component: NavUserCardComponent;
    let fixture: ComponentFixture<NavUserCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule, MatButtonModule, MatMenuModule],
            declarations: [NavUserCardComponent],
            providers: [{
                provide: AuthService,
                useValue: MockAuthService
            }, {
                provide: ObservableMedia,
                useValue: MockObservableMedia
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavUserCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
