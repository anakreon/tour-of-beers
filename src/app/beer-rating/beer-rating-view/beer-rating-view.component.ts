import { Component, Input, OnInit } from '@angular/core';
import { BeerRatingService } from '../beer-rating.service';
import { Observable } from 'rxjs';
import { BeerRatingResult } from '../../app.types';

@Component({
    selector: 'app-beer-rating-view',
    templateUrl: './beer-rating-view.component.html',
    styleUrls: ['./beer-rating-view.component.css']
})
export class BeerRatingViewComponent implements OnInit {
    @Input() beerId: string;
    public totalRating: Observable<BeerRatingResult>;

    constructor (private beerRatingService: BeerRatingService) {}

    ngOnInit () {
        this.totalRating = this.beerRatingService.getBeerRating(this.beerId);
    }
}
