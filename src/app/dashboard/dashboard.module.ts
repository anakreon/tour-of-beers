import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatProgressBarModule, MatGridListModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerRatingModule } from '../beer-rating/beer-rating.module';
import { RoutingModule } from '../routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardCardBestComponent } from './dashboard-card-best/dashboard-card-best.component';
import { DashboardCarouselComponent } from './dashboard-carousel/dashboard-carousel.component';
@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatGridListModule,
        NgbModule,
        BeerRatingModule,
        RoutingModule
    ],
    declarations: [DashboardComponent, DashboardCardComponent, DashboardCardBestComponent, DashboardCarouselComponent]
})
export class DashboardModule { }
