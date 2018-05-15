import { Component, OnInit } from '@angular/core';
import { BeerStoreService } from '../beer-store.service';

@Component({
    selector: 'app-beers',
    templateUrl: './beers.component.html',
    styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

    beers;

    constructor (private beerStoreService: BeerStoreService) { }

    ngOnInit () {
        this.getBeers();
    }

    getBeers(): void {
        this.beerStoreService.getBeers().subscribe((beers) => {
            this.beers = beers;
        });
    }

}
