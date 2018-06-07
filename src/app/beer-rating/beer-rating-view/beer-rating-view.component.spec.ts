import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerRatingViewComponent } from './beer-rating-view.component';
import { BeerRatingService } from '../beer-rating.service';
import { Input, Component } from '@angular/core';

@Component({ selector: 'ngb-rating', template: '' })
class NgbRatingComponent {
    @Input('rate') rate;
}

const MockBeerRatingService = jasmine.createSpyObj('MockBeerRatingService', ['getBeerRating']);

describe('BeerRatingViewComponent', () => {
    let component: BeerRatingViewComponent;
    let fixture: ComponentFixture<BeerRatingViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerRatingViewComponent, NgbRatingComponent],
            providers: [{ 
                provide: BeerRatingService,
                useValue: MockBeerRatingService 
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerRatingViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
