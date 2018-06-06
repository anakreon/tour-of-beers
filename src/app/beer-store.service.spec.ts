import { TestBed, inject } from '@angular/core/testing';

import { BeerStoreService } from './beer-store.service';

describe('BeerStoreService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerStoreService]
        });
    });

    it('should be created', inject([BeerStoreService], (service: BeerStoreService) => {
        expect(service).toBeTruthy();
    }));
});
