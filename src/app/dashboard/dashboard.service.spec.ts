import { TestBed, inject } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { BeerRatingService } from '../beer-rating/beer-rating.service';
import { BeerStoreService } from '../beer-store.service';

const MockBeerRatingService = jasmine.createSpyObj('MockBeerRatingService', ['getAllBeerRatings']);
const MockBeerStoreService = jasmine.createSpyObj('MockBeerStoreService', ['getBeersInOrder']);

describe('DashboardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DashboardService, { 
                provide: BeerRatingService,
                useValue: MockBeerRatingService 
            }, { 
                provide: BeerStoreService,
                useValue: MockBeerStoreService 
            }]
        });
    });

    it('should be created', inject([DashboardService], (service: DashboardService) => {
        expect(service).toBeTruthy();
    }));
});
