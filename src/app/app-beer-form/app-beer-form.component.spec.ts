import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeerFormComponent } from './app-beer-form.component';

describe('AppBeerFormComponent', () => {
    let component: AppBeerFormComponent;
    let fixture: ComponentFixture<AppBeerFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
