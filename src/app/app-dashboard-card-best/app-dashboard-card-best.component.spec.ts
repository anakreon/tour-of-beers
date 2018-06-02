import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashboardCardBestComponent } from './app-dashboard-card-best.component';

describe('AppDashboardCardBestComponent', () => {
    let component: AppDashboardCardBestComponent;
    let fixture: ComponentFixture<AppDashboardCardBestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppDashboardCardBestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppDashboardCardBestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
