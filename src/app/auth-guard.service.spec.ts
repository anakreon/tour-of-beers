import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

const MockAuthService = jasmine.createSpyObj('MockAuthService', ['isAuthenticated'])

describe('AuthGuardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuardService, { 
                provide: AuthService,
                useValue: MockAuthService 
            }]
        });
    });

    it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
        expect(service).toBeTruthy();
    }));
});
