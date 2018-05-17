import { TestBed, inject } from '@angular/core/testing';

import { BeerStoreServiceService } from './beer-store-service.service';

describe('BeerStoreServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerStoreServiceService]
    });
  });

  it('should be created', inject([BeerStoreServiceService], (service: BeerStoreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
