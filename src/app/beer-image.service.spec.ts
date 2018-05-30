import { TestBed, inject } from '@angular/core/testing';

import { BeerImageService } from './beer-image.service';

describe('BeerImageService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerImageService]
        });
    });

    it('should be created', inject([BeerImageService], (service: BeerImageService) => {
        expect(service).toBeTruthy();
    }));
});
