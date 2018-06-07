import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatProgressBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardCardBestComponent } from './dashboard-card-best.component';
import { BeerImageService } from '../../beer-image.service';

@Component({ selector: 'app-beer-rating-view', template: '' })
class AppBeerRatingViewComponent {
    @Input('beerId') beerId;
}

const MockBeerImageService = jasmine.createSpyObj('MockBeerImageService', ['getDownloadUrlOrPlaceholder']);

describe('DashboardCardBestComponent', () => {
    let component: DashboardCardBestComponent;
    let fixture: ComponentFixture<DashboardCardBestComponent>;

    beforeEach(async(() => {
        MockBeerImageService.getDownloadUrlOrPlaceholder.and.returnValue({
            then: function () {}
        });
        TestBed.configureTestingModule({
            imports: [MatCardModule, MatProgressBarModule, RouterTestingModule],
            declarations: [DashboardCardBestComponent, AppBeerRatingViewComponent],
            providers: [{
                provide: BeerImageService,
                useValue: MockBeerImageService 
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardCardBestComponent);
        component = fixture.componentInstance;
        component.beer = <any>{
            id: 123,
            pictureId: ''
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
