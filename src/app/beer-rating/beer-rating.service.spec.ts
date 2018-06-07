import { TestBed, inject } from '@angular/core/testing';

import { BeerRatingService } from './beer-rating.service';
import { AngularFirestore } from 'angularfire2/firestore';

const MockAngularFirestore = jasmine.createSpyObj('AngularFirestore', ['doc', 'collection']);
MockAngularFirestore.firestore = {
    batch: jasmine.createSpy('batch')
};

describe('BeerRatingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerRatingService, { 
                provide: AngularFirestore,
                useValue: MockAngularFirestore 
            }]
        });
    });

    it('should be created', inject([BeerRatingService], (service: BeerRatingService) => {
        expect(service).toBeTruthy();
    }));
});
