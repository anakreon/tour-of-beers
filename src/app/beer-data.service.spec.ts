import { TestBed, inject } from '@angular/core/testing';

import { BeerDataService } from './beer-data.service';

describe('BeerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerDataService]
    });
  });

  it('should be created', inject([BeerDataService], (service: BeerDataService) => {
    expect(service).toBeTruthy();
  }));
});
