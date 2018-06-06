import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerRatingViewComponent } from './beer-rating-view.component';

describe('BeerRatingViewComponent', () => {
    let component: BeerRatingViewComponent;
    let fixture: ComponentFixture<BeerRatingViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerRatingViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerRatingViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
