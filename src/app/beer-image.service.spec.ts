import { TestBed, inject } from '@angular/core/testing';

import { BeerImageService } from './beer-image.service';
import { AngularFireStorage } from 'angularfire2/storage';

const MockAngularFireStorage = jasmine.createSpyObj('MockAngularFireStorage', ['ref']);

describe('BeerImageService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerImageService, { 
                provide: AngularFireStorage,
                useValue: MockAngularFireStorage
            }]
        });
    });

    it('should be created', inject([BeerImageService], (service: BeerImageService) => {
        expect(service).toBeTruthy();
    }));
});
