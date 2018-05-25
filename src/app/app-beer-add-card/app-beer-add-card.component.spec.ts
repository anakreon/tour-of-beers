import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerAddCardComponent } from './app-beer-add-card.component';

describe('AppBeerAddCardComponent', () => {
    let component: AppBeerAddCardComponent;
    let fixture: ComponentFixture<AppBeerAddCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerAddCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerAddCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
