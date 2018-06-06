import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerRatingUserComponent } from './beer-rating-user.component';

describe('BeerRatingUserComponent', () => {
    let component: BeerRatingUserComponent;
    let fixture: ComponentFixture<BeerRatingUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerRatingUserComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerRatingUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
