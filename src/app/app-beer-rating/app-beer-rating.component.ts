import { Component, Input, OnInit } from '@angular/core';
import { BeerStoreServiceService } from '../beer-store-service.service';
import { BeerRatingService } from '../beer-rating.service';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-beer-rating',
    templateUrl: './app-beer-rating.component.html',
    styleUrls: ['./app-beer-rating.component.css']
})
export class AppBeerRatingComponent implements OnInit {
    @Input() beerId: string;
    public myRating: number;
    public totalRating: number;
    private userId: string;
    public myRatingLoaded = false;

    constructor (private beerRatingService: BeerRatingService, private authService: AuthService) {}

    ngOnInit () {
        this.beerRatingService.getBeerRating(this.beerId).subscribe((rating) => {
            this.totalRating = rating;
        });

        this.authService.getUserId().subscribe((userId) => {
            if (userId) {
                this.userId = userId;
                this.beerRatingService.getUserBeerRating(this.userId, this.beerId).subscribe((rating) => {
                    this.myRating = rating;
                    this.myRatingLoaded = true;
                });        
            }
        });
    }

    public updateRating (): void {
        this.beerRatingService.rateBeer(this.userId, this.beerId, this.myRating);
    }

}
