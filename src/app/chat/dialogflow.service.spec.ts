import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DialogflowService } from './dialogflow.service';
import { HttpClient } from '@angular/common/http';

const MockHttp = jasmine.createSpyObj('MockHttp', ['post']);

describe('DialogflowService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DialogflowService, { 
                provide: HttpClient,
                useValue: MockHttp 
            }]
        });
    });

    it('should be created', inject([DialogflowService], (service: DialogflowService) => {
        expect(service).toBeTruthy();
    }));
});
