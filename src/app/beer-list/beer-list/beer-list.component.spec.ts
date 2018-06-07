import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BeerListComponent } from './beer-list.component';
import { BeerStoreService } from '../../beer-store.service';
import { LoadingService } from '../../loading.service';

const MockBeerStoreService = jasmine.createSpyObj('MockBeerStoreService', ['getBeers']);
const MockLoadingService = jasmine.createSpyObj('MockLoadingService', ['setLoading']);

describe('BeerListComponent', () => {
    let component: BeerListComponent;
    let fixture: ComponentFixture<BeerListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatTableModule, MatSortModule, RouterTestingModule, BrowserAnimationsModule],
            declarations: [BeerListComponent],
            providers: [{ 
                provide: BeerStoreService,
                useValue: MockBeerStoreService 
            }, { 
                provide: LoadingService,
                useValue: MockLoadingService 
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
