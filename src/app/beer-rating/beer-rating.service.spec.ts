import { TestBed, inject } from '@angular/core/testing';

import { BeerRatingService } from './beer-rating.service';

describe('BeerRatingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerRatingService]
        });
    });

    it('should be created', inject([BeerRatingService], (service: BeerRatingService) => {
        expect(service).toBeTruthy();
    }));
});
