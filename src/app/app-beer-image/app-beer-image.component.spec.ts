import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerImageComponent } from './app-beer-image.component';

describe('AppBeerImageComponent', () => {
    let component: AppBeerImageComponent;
    let fixture: ComponentFixture<AppBeerImageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerImageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
