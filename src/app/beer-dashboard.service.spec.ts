import { TestBed, inject } from '@angular/core/testing';

import { BeerDashboardService } from './beer-dashboard.service';

describe('BeerDashboardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerDashboardService]
        });
    });

    it('should be created', inject([BeerDashboardService], (service: BeerDashboardService) => {
        expect(service).toBeTruthy();
    }));
});
