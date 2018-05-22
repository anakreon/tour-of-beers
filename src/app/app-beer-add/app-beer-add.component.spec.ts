import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerAddComponent } from './app-beer-add.component';

describe('AppBeerAddComponent', () => {
    let component: AppBeerAddComponent;
    let fixture: ComponentFixture<AppBeerAddComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerAddComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
