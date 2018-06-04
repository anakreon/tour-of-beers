import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BeerDashboardService } from '../beer-dashboard.service';
import { Observable } from 'rxjs';
import { Beer } from '../app.types';
import { LoadingService } from '../loading.service';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
    selector: 'app-dashboard',
    templateUrl: './app-dashboard.component.html',
    styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit, AfterContentInit {
    public beers: Beer[];
    public bestBeer: Beer;
    public gridCols: number;
    public shouldShowCarousel = true;
    private gridByBreakpoint = {
        xl: 5,
        lg: 4,
        md: 3,
        sm: 2,
        xs: 1
    };

    constructor (
        private beerDashboardService: BeerDashboardService, private loadingService: LoadingService, private observableMedia: ObservableMedia
    ) {}

    ngOnInit () {
        this.loadDashboardBeers();
    }

    ngAfterContentInit() {
        this.observableMedia.asObservable().subscribe((change: MediaChange) => {
            this.gridCols = this.gridByBreakpoint[change.mqAlias];
            this.shouldShowCarousel = change.mqAlias !== 'xs';
        });
    }

    public loadDashboardBeers (): void {
        const limit = 12;
        const unsetLoading = this.loadingService.setLoading();
        this.beerDashboardService.getDashboardBeers(limit).subscribe((beers) => {
            this.bestBeer = beers[0];
            this.beers = beers.slice(1);
            unsetLoading();
        });
    }
}
