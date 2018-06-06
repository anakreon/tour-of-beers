import { Injectable } from '@angular/core';
import { BeerStoreService } from '../beer-store.service';
import { BeerRatingService } from '../beer-rating/beer-rating.service';
import { Observable } from 'rxjs';
import { Beer } from '../app.types';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor (private beerStoreServiceService: BeerStoreService, private beerRatingService: BeerRatingService) {}
    
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
