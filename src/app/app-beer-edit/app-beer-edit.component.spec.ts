import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerEditComponent } from './app-beer-edit.component';

describe('AppBeerAddComponent', () => {
    let component: AppBeerEditComponent;
    let fixture: ComponentFixture<AppBeerEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerEditComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
