import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerCarouselComponent } from './app-beer-carousel.component';

describe('AppBeerCarouselComponent', () => {
    let component: AppBeerCarouselComponent;
    let fixture: ComponentFixture<AppBeerCarouselComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerCarouselComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
