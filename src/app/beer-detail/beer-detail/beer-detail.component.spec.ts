import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatProgressBarModule, MatButtonModule } from '@angular/material';

import { BeerDetailComponent } from './beer-detail.component';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { BeerStoreService } from '../../beer-store.service';
import { BeerImageService } from '../../beer-image.service';
import { LoadingService } from '../../loading.service';
import { BeerRatingService } from '../../beer-rating/beer-rating.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Subject, Observable, from } from 'rxjs';

@Component({selector: 'app-beer-rating-view', template: ''})
class AppBeerRatingViewComponent {
    @Input('beerId') beerId;
}

@Component({selector: 'app-beer-rating-user', template: ''})
class AppBeerRatingUserComponent {
    @Input('beerId') beerId;
}

@Component({selector: 'app-beer-detail-map', template: ''})
class AppBeerDetailMapComponent {
    @Input('address') address;
}

const beerId = 'beerId';
const MockRoute = {
    snapshot: {
        paramMap: {
            get: jasmine.createSpy('get').and.returnValue(beerId)
        }
    }
};
const MockRouter = jasmine.createSpyObj('MockRouter', ['navigate']);
const MockBeerStoreService = jasmine.createSpyObj('MockBeerStoreService', ['deleteBeer', 'getBeer']);
const MockBeerImageService = jasmine.createSpyObj('MockBeerImageService', ['deletePictureForBeer', 'getDownloadUrlOrPlaceholder']);
const MockAuthService = jasmine.createSpyObj('MockAuthService', ['isAuthenticated']);
const MockLoadingService = jasmine.createSpyObj('MockLoadingService', ['setLoading']);
const MockBeerRatingService = jasmine.createSpyObj('MockBeerRatingService', ['deleteRatingsForBeer']);
const MockObservableMedia = jasmine.createSpyObj('MockObservableMedia', ['isActive']);
let beerGetterSubject;

describe('BeerDetailComponent', () => {
    let component: BeerDetailComponent;
    let fixture: ComponentFixture<BeerDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatProgressBarModule, MatCardModule, MatButtonModule, RouterTestingModule],
            declarations: [BeerDetailComponent, AppBeerRatingViewComponent, AppBeerRatingUserComponent, AppBeerDetailMapComponent],
            providers: [{ 
                provide: ActivatedRoute,
                useValue: MockRoute
            }, { 
                provide: Router,
                useValue: MockRouter
            }, { 
                provide: BeerStoreService,
                useValue: MockBeerStoreService
            }, { 
                provide: BeerImageService,
                useValue: MockBeerImageService
            }, { 
                provide: AuthService,
                useValue: MockAuthService 
            }, { 
                provide: LoadingService,
                useValue: MockLoadingService
            }, { 
                provide: BeerRatingService,
                useValue: MockBeerRatingService
            }, { 
                provide: ObservableMedia,
                useValue: MockObservableMedia
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        beerGetterSubject = new Subject();
        MockBeerStoreService.getBeer.and.returnValue(beerGetterSubject);
        fixture = TestBed.createComponent(BeerDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('instance', function () {
        /*it ('', function () {
            expect(true).toBeTruthy();
        })*/
        /*describe('initial state', function () {
            it('', () => {
                expect(component).toBeTruthy();
                expect(component.beer).toBeUndefined();
                expect(component.isLoading).toBeFalsy();
                expect(MockLoadingService.setLoading).toHaveBeenCalled();
                expect(MockBeerStoreService.getBeer).toHaveBeenCalledWith(beerId);
                expect(MockBeerImageService.getDownloadUrlOrPlaceholder).not.toHaveBeenCalled();
            });
        });   */     
    });
});
