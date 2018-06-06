import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailMapComponent } from './beer-detail-map.component';

describe('BeerDetailMapComponent', () => {
    let component: BeerDetailMapComponent;
    let fixture: ComponentFixture<BeerDetailMapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerDetailMapComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerDetailMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
