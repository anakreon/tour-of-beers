import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerRatingViewComponent } from './app-beer-rating-view.component';

describe('AppBeerRatingComponent', () => {
    let component: AppBeerRatingViewComponent;
    let fixture: ComponentFixture<AppBeerRatingViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerRatingViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerRatingViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
