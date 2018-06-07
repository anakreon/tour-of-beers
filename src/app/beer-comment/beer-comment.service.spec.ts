import { TestBed, inject } from '@angular/core/testing';

import { BeerCommentService } from './beer-comment.service';

describe('BeerCommentService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerCommentService]
        });
    });

    it('should be created', inject([BeerCommentService], (service: BeerCommentService) => {
        expect(service).toBeTruthy();
    }));
});
