import { TestBed, inject } from '@angular/core/testing';

import { BeerDataService } from './beer-data.service';
import { BeerStoreService } from './beer-store.service';

const MockBeerStoreService = jasmine.createSpyObj('MockBeerStoreService', ['addBeer']);

describe('BeerDataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerDataService, { 
                provide: BeerStoreService,
                useValue: MockBeerStoreService 
            }]
        });
    });

    let service;
    beforeEach(inject([BeerDataService], (beerDataService: BeerDataService) => {
        service = beerDataService;
    }));
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
