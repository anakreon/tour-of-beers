import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerEditComponent } from './beer-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerStoreService } from '../../beer-store.service';
import { BeerImageService } from '../../beer-image.service';
import { LoadingService } from '../../loading.service';
import { Subject } from 'rxjs';

@Component({ selector: 'app-beer-edit-form', template: '' })
class AppBeerEditFormComponent {
    @Input('beer') beer;
}

@Component({ selector: 'app-beer-edit-image', template: '' })
class AppBeerEditImageComponent {
    @Input('imageSrc') imageSrc;
}

const MockRoute = {
    paramMap: new Subject()
};
const MockRouter = jasmine.createSpyObj('MockRouter', ['Navigate']);
const MockBeerStoreService = jasmine.createSpyObj('MockBeerStoreService', ['updateBeer', 'getBeer']);
const MockBeerImageService = jasmine.createSpyObj('MockBeerImageService', ['deletePictureForBeer', 'getDownloadUrlOrPlaceholder']);
const MockLoadingService = jasmine.createSpyObj('MockLoadingService', ['setLoading', 'wrapWithLoading']);

describe('BeerEditComponent', () => {
    let component: BeerEditComponent;
    let fixture: ComponentFixture<BeerEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerEditComponent, AppBeerEditFormComponent, AppBeerEditImageComponent],
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
                provide: LoadingService,
                useValue: MockLoadingService
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
