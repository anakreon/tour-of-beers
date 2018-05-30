import { Component, Input, OnInit } from '@angular/core';
import { BeerRatingService } from '../beer-rating.service';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-beer-rating-user',
    templateUrl: './app-beer-rating-user.component.html',
    styleUrls: ['./app-beer-rating-user.component.css']
})
export class AppBeerRatingUserComponent implements OnInit {
    @Input() beerId: string;
    private userId: string;
    public myRating: number;
    public myRatingLoaded = false;

    constructor (private beerRatingService: BeerRatingService, private authService: AuthService) {}

    ngOnInit () {
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
