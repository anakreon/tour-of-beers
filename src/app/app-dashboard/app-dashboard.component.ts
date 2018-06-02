import { Component, OnInit } from '@angular/core';
import { BeerDashboardService } from '../beer-dashboard.service';
import { Observable } from 'rxjs';
import { Beer } from '../app.types';

@Component({
    selector: 'app-dashboard',
    templateUrl: './app-dashboard.component.html',
    styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {
    public beers: Beer[];
    public bestBeer: Beer;

    constructor (private beerDashboardService: BeerDashboardService) {}

    ngOnInit () {
        const limit = 12;
        this.beerDashboardService.getDashboardBeers(limit).subscribe((beers) => {
            this.bestBeer = beers[0];
            this.beers = beers.slice(1);
        });
    }
    
}
