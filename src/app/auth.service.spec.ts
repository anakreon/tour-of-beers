import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

const MockAfAuth = {
    user: {
        subscribe () {}
    },
    auth: {}
};

describe('AuthService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService, { 
                provide: AngularFireAuth,
                useValue: MockAfAuth 
            }]
        });
    });

    it('should be created', inject([AuthService], (service: AuthService) => {
        expect(service).toBeTruthy();
    }));
});
