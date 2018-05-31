import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerStoreServiceService } from '../beer-store-service.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Beer } from '../app.types';
import { AuthService } from '../auth.service';
import { BeerImageService } from '../beer-image.service';
import { LoadingService } from '../loading.service';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './app-beer-detail.component.html',
    styleUrls: ['./app-beer-detail.component.css']
})
export class AppBeerDetailComponent implements OnInit {
    public beer: Beer;
    public beerPictureUrl: string = '';

    constructor (
        private route: ActivatedRoute, private beerStoreService: BeerStoreServiceService, 
        private beerImageService: BeerImageService, private authService: AuthService, private loadingService: LoadingService
    ) {}

    ngOnInit () {
        this.getBeer();
    }

    public isUserAuthenticated () {
        return this.authService.isAuthenticated();
    }

    private getBeer (): void {
        const unsetLoading = this.loadingService.setLoading();
        const id = this.route.snapshot.paramMap.get('id');
        this.beerStoreService.getBeer(id).subscribe((beer: Beer) => {
            this.beer = beer;
            this.beerImageService.getDownloadUrlOrPlaceholder(this.beer.pictureId).then((url) => {
                this.beerPictureUrl = url;
                unsetLoading();
            });
        });
    }
    
}
