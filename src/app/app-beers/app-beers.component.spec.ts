
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBeersComponent } from './app-beers.component';

describe('AppBeersComponent', () => {
    let component: AppBeersComponent;
    let fixture: ComponentFixture<AppBeersComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeersComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AppBeersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
