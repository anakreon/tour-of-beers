import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerAddImageComponent } from './app-beer-add-image.component';

describe('AppBeerAddImageComponent', () => {
    let component: AppBeerAddImageComponent;
    let fixture: ComponentFixture<AppBeerAddImageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerAddImageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerAddImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
