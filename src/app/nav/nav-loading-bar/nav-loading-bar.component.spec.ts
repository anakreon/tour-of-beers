import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBarModule } from '@angular/material';

import { NavLoadingBarComponent } from './nav-loading-bar.component';
import { LoadingService } from '../../loading.service';

const MockLoadingService = jasmine.createSpyObj('MockLoadingService', ['shouldShowLoading']);

describe('NavLoadingBarComponent', () => {
    let component: NavLoadingBarComponent;
    let fixture: ComponentFixture<NavLoadingBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatProgressBarModule],
            declarations: [NavLoadingBarComponent],
            providers: [{
                provide: LoadingService,
                useValue: MockLoadingService
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavLoadingBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
