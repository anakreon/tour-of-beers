import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BeerStoreServiceService } from '../beer-store-service.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Beer } from '../app.types';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './app-beer-detail.component.html',
    styleUrls: ['./app-beer-detail.component.css']
})
export class AppBeerDetailComponent implements OnInit {
    
    public beer: Beer;
    public beerPictureUrl: string = '';

    constructor (
        private route: ActivatedRoute, private location: Location, private beerStoreService: BeerStoreServiceService, 
        private afStorage: AngularFireStorage
    ) {}

    ngOnInit () {
        this.getBeer();
    }

    private getBeer (): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.beerStoreService.getBeer(id).subscribe((beer) => {
            this.beer = beer;
            
            if (this.beer.pictureId) {
                const ref = this.afStorage.ref(this.beer.pictureId);
                ref.getDownloadURL().subscribe((url) => {
                    this.beerPictureUrl = url;
                });
            } else {
                this.beerPictureUrl = 'assets/beer_placeholder.jpg';
            }
        });
    }

    public goBack(): void {
        this.location.back();
    }

    public edit (): void {
        
    }

}
