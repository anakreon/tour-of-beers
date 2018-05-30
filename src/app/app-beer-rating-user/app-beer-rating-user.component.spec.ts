import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerRatingUserComponent } from './app-beer-rating-user.component';

describe('AppBeerRatingComponent', () => {
    let component: AppBeerRatingUserComponent;
    let fixture: ComponentFixture<AppBeerRatingUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerRatingUserComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerRatingUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
