import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatProgressBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardCardComponent } from './dashboard-card.component';
import { BeerImageService } from '../../beer-image.service';
import { Input, Component } from '@angular/core';

@Component({ selector: 'app-beer-rating-view', template: '' })
class AppBeerRatingViewComponent {
    @Input('beerId') beerId;
}

const MockBeerImageService = jasmine.createSpyObj('MockBeerImageService', ['getDownloadUrlOrPlaceholder']);

describe('DashboardCardComponent', () => {
    let component: DashboardCardComponent;
    let fixture: ComponentFixture<DashboardCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule, MatProgressBarModule, RouterTestingModule],
            declarations: [DashboardCardComponent, AppBeerRatingViewComponent],
            providers: [{
                provide: BeerImageService,
                useValue: MockBeerImageService 
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        MockBeerImageService.getDownloadUrlOrPlaceholder.and.returnValue({
            then: function () {}
        });
        fixture = TestBed.createComponent(DashboardCardComponent);
        component = fixture.componentInstance;
        component.beer = <any>{
            pictureId: ''
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
