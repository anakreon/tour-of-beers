import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatProgressBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { NavBeerAddCardComponent } from './nav-beer-add-card.component';
import { BeerStoreService } from '../../beer-store.service';

const MockRouter = jasmine.createSpyObj('MockRouter', ['navigate']);
const MockBeerStoreService = jasmine.createSpyObj('MockBeerStoreService', ['addBeer']);

describe('NavBeerAddCardComponent', () => {
    let component: NavBeerAddCardComponent;
    let fixture: ComponentFixture<NavBeerAddCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatProgressBarModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, BrowserAnimationsModule],
            declarations: [NavBeerAddCardComponent],
            providers: [{
                provide: Router,
                useValue: MockRouter
            }, {
                provide: BeerStoreService,
                useValue: MockBeerStoreService
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavBeerAddCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
