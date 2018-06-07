import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatProgressBarModule, MatGridListModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from '../dashboard.service';
import { LoadingService } from '../../loading.service';
import { Subject } from 'rxjs';
import { ObservableMedia } from '@angular/flex-layout';

@Component({ selector: 'app-dashboard-carousel', template: '' })
class AppDashboardCarouselComponent {}

@Component({ selector: 'app-dashboard-card', template: '' })
class AppDashboardCardComponent {
    @Input('beer') beer;
}

@Component({ selector: 'app-dashboard-card-best', template: '' })
class AppDashboardCardBestComponent {
    @Input('beer') beer;
}

const MockDashboardService = jasmine.createSpyObj('MockDashboardService', ['getDashboardBeers']);
const MockLoadingService = jasmine.createSpyObj('MockLoadingService', ['setLoading']);
const MockObservableMedia = jasmine.createSpyObj('MockLoadingService', ['asObservable']);

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatGridListModule, MatCardModule],
            declarations: [DashboardComponent, AppDashboardCardComponent, AppDashboardCardBestComponent, AppDashboardCarouselComponent],
            providers: [{
                provide: DashboardService,
                useValue: MockDashboardService 
            }, {
                provide: LoadingService,
                useValue: MockLoadingService 
            }, {
                provide: ObservableMedia,
                useValue: MockObservableMedia 
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        MockDashboardService.getDashboardBeers.and.returnValue(new Subject());
        MockObservableMedia.asObservable.and.returnValue(new Subject());
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        component.gridCols = 3;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
