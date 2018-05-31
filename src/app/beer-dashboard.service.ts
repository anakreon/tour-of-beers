import { Injectable } from '@angular/core';
import { BeerStoreServiceService } from './beer-store-service.service';
import { BeerRatingService } from './beer-rating.service';
import { Observable } from 'rxjs';
import { Beer } from './app.types';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BeerDashboardService {
    constructor (private beerStoreServiceService: BeerStoreServiceService, private beerRatingService: BeerRatingService) {}
    
    public getDashboardBeers (limit: number): Observable<Beer[]> {
        return this.beerRatingService.getAllBeerRatings().pipe(
            map((ratings) => {
                const beerIdRatingsMap = {};
                ratings.forEach((rating) => {
                    beerIdRatingsMap[rating.beerId] = beerIdRatingsMap[rating.beerId] || [];
                    beerIdRatingsMap[rating.beerId].push(rating.rating);
                });
                const beerIdAvgRatingMap = {};
                Object.keys(beerIdRatingsMap).forEach((beerId) => {
                    const sum = beerIdRatingsMap[beerId].reduce((acc, value) => acc + value);
                    beerIdAvgRatingMap[beerId] = sum / beerIdRatingsMap[beerId].length;
                });
                return Object.keys(beerIdAvgRatingMap)
                    .sort(function (a, b) { 
                        return beerIdAvgRatingMap[a] < beerIdAvgRatingMap[b] ? 1 : -1;
                    });
            }),
            switchMap((beerIds: string[]) => this.beerStoreServiceService.getBeersInOrder(beerIds, limit))
        );
    }

}
