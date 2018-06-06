import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBeerAddCardComponent } from './nav-beer-add-card.component';

describe('NavBeerAddCardComponent', () => {
    let component: NavBeerAddCardComponent;
    let fixture: ComponentFixture<NavBeerAddCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavBeerAddCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavBeerAddCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
