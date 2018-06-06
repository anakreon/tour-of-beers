import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardBestComponent } from './dashboard-card-best.component';

describe('DashboardCardBestComponent', () => {
    let component: DashboardCardBestComponent;
    let fixture: ComponentFixture<DashboardCardBestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardCardBestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardCardBestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
