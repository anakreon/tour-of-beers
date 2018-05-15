import { Component, OnInit } from '@angular/core';
import { BeerStoreService } from '../beer-store.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    beers = [];

    constructor (private beerStoreService: BeerStoreService) {}

    ngOnInit () {
        this.getBeers();
    }

    getBeers (): void {
        this.beerStoreService.getBeers().subscribe((beers) => this.beers = beers.slice(1, 5));
    }
}