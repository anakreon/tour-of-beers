import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerRatingComponent } from './app-beer-rating.component';

describe('AppBeerRatingComponent', () => {
    let component: AppBeerRatingComponent;
    let fixture: ComponentFixture<AppBeerRatingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerRatingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerRatingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
