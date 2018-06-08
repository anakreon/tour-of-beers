import { TestBed, inject } from '@angular/core/testing';

import { BeerCommentService } from './beer-comment.service';
import { AngularFirestore } from 'angularfire2/firestore';

const MockAngularFirestore = jasmine.createSpyObj('MockBeerStoreService', ['collection', 'createId', 'doc']);

describe('BeerCommentService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerCommentService, { 
                provide: AngularFirestore,
                useValue: MockAngularFirestore
            }]
        });
    });

    it('should be created', inject([BeerCommentService], (service: BeerCommentService) => {
        expect(service).toBeTruthy();
    }));
});
