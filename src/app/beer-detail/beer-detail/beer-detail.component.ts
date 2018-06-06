import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerStoreService } from '../../beer-store.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Beer } from '../../app.types';
import { AuthService } from '../../auth.service';
import { BeerImageService } from '../../beer-image.service';
import { LoadingService } from '../../loading.service';
import { BeerRatingService } from '../../beer-rating/beer-rating.service';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
    public beer: Beer;
    public beerPictureUrl = '';
    public flexDirection = 'row';
    public isLoading = false;

    constructor (
        private route: ActivatedRoute, private router: Router, private beerStoreService: BeerStoreService,
        private beerImageService: BeerImageService, private authService: AuthService, private loadingService: LoadingService,
        private beerRatingService: BeerRatingService, private observableMedia: ObservableMedia
    ) {}

    ngOnInit () {
        this.getBeer();
    }

    public getFlexDirection () {
        return this.observableMedia.isActive('xs') ? 'column' : 'row';
    }

    public isUserAuthenticated () {
        return this.authService.isAuthenticated();
    }

    public deleteBeer () {
        const unsetLoading = this.loadingService.setLoading();
        this.beerRatingService.deleteRatingsForBeer(this.beer.id)
            .then(() => this.beerImageService.deletePictureForBeer(this.beer.pictureId))
            .then(() => this.beerStoreService.deleteBeer(this.beer.id))
            .then(() => {
                unsetLoading();
                this.navigateToDashboard();
            })
            .catch((error) => console.log(error));
    }
    private navigateToDashboard () {
        this.router.navigate(['/dashboard']);
    }

    private getBeer (): void {
        const unsetLoading = this.loadingService.setLoading();
        const id = this.route.snapshot.paramMap.get('id');
        this.beerStoreService.getBeer(id).subscribe((beer: Beer) => {
            this.beer = beer;
            this.isLoading = true;
            this.beerImageService.getDownloadUrlOrPlaceholder(this.beer.pictureId).then((url) => {
                this.beerPictureUrl = url;
                unsetLoading();
            });
        });
    }

    public onImageLoad () {
        this.isLoading = false;
    }
}
