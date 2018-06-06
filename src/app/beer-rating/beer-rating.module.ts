import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRatingUserComponent } from './beer-rating-user/beer-rating-user.component';
import { BeerRatingViewComponent } from './beer-rating-view/beer-rating-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [BeerRatingUserComponent, BeerRatingViewComponent],
    exports: [BeerRatingUserComponent, BeerRatingViewComponent]
})
export class BeerRatingModule { }
