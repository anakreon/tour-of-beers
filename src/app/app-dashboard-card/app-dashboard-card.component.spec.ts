import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashboardCardComponent } from './app-dashboard-card.component';

describe('AppDashboardCardComponent', () => {
    let component: AppDashboardCardComponent;
    let fixture: ComponentFixture<AppDashboardCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppDashboardCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppDashboardCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
