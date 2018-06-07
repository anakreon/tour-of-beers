import { TestBed, inject } from '@angular/core/testing';

import { BeerStoreService } from './beer-store.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject, Observable } from 'rxjs';

const MockAngularFirestore = jasmine.createSpyObj('AngularFirestore', ['doc', 'collection', 'createId']);
MockAngularFirestore.firestore = {
    batch: jasmine.createSpy('batch')
};

describe('BeerStoreService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerStoreService, { 
                provide: AngularFirestore,
                useValue: MockAngularFirestore 
            }]
        });
    });

    let service;
    beforeEach(inject([BeerStoreService], (beerStoreService: BeerStoreService) => {
        service = beerStoreService;
    }));

    describe('getBeersInOrder', function () {
        /*it('', (done) => {
            const beerIds = [1, 2, 3, 4, 5];
            const limit = 3;
            console.log(service);
            spyOn(service, 'getBeer').and.callFake((beerId) => {
                return new Observable((subscriber) => {
                    subscriber.next(beerId + 'xxx');
                });              
            });
            const result = service.getBeerInOrder(beerIds, limit);
            result.subscribe((beers) => {
                expect(beers).toEqual(['1xxx', '2xxx', '3xxx']);
                done();
            });
        });*/
    });
});
