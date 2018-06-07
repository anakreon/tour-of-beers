import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BeerRatingUserComponent } from './beer-rating-user.component';
import { AuthService } from '../../auth.service';
import { BeerRatingService } from '../beer-rating.service';
import { Subject } from 'rxjs';

const MockAuthService = jasmine.createSpyObj('MockAuthService', ['getUserId']);
const MockBeerRatingService = jasmine.createSpyObj('MockBeerRatingService', ['getUserBeerRating', 'rateBeer']);

describe('BeerRatingUserComponent', () => {
    let component: BeerRatingUserComponent;
    let fixture: ComponentFixture<BeerRatingUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgbModule],
            declarations: [BeerRatingUserComponent],
            providers: [{ 
                provide: AuthService,
                useValue: MockAuthService 
            }, { 
                provide: BeerRatingService,
                useValue: MockBeerRatingService 
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        MockAuthService.getUserId.and.returnValue(new Subject());
        fixture = TestBed.createComponent(BeerRatingUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
