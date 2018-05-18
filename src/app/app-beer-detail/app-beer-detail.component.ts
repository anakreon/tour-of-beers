import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BeerStoreServiceService } from '../beer-store-service.service';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './app-beer-detail.component.html',
    styleUrls: ['./app-beer-detail.component.css']
})
export class AppBeerDetailComponent implements OnInit {
    
    beer;

    constructor (private route: ActivatedRoute, private location: Location, private beerStoreService: BeerStoreServiceService) {}

    ngOnInit () {
        this.getBeer();
    }

    getBeer (): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.beerStoreService.getBeer(id).subscribe((beer) => {
            this.beer = beer;
        });
    }

    goBack(): void {
        this.location.back();
    }

    edit (): void {
        
    }

}
