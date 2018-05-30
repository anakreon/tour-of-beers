import { Injectable } from '@angular/core';
import { BeerStoreServiceService } from './beer-store-service.service';
import { BeerRatingService } from './beer-rating.service';

@Injectable({
    providedIn: 'root'
})
export class BeerDashboardService {
    constructor (private beerStoreServiceService: BeerStoreServiceService, private beerRatingService: BeerRatingService) {}
    
    public getDashboardBeers () {
        //this.beerRatingService.getBeersOrderedByRating(10).then()
        return this.beerStoreServiceService.getBeers();
    }

}
