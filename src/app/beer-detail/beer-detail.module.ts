import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatProgressBarModule, MatButtonModule } from '@angular/material';

import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerDetailMapComponent } from './beer-detail-map/beer-detail-map.component';
import { BeerRatingModule } from '../beer-rating/beer-rating.module';
import { RoutingModule } from '../routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonModule,
        BeerRatingModule,
        RoutingModule
    ],
    declarations: [BeerDetailComponent, BeerDetailMapComponent]
})
export class BeerDetailModule { }
