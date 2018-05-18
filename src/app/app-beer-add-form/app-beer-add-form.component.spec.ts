import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerAddFormComponent } from './app-beer-add-form.component';

describe('AppBeerAddFormComponent', () => {
    let component: AppBeerAddFormComponent;
    let fixture: ComponentFixture<AppBeerAddFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerAddFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerAddFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
