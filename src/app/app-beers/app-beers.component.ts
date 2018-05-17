import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AppBeerListDataSource } from './app-beers-datasource';
import { BeerStoreServiceService } from '../beer-store-service.service';

@Component({
    selector: 'app-beers',
    templateUrl: './app-beers.component.html',
    styleUrls: ['./app-beers.component.css']
})
export class AppBeersComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: AppBeerListDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name', 'ingredients', 'alcohol', 'epm', 'brewery'];

    constructor (private beerStoreService: BeerStoreServiceService) {}

    ngOnInit() {
        this.dataSource = new AppBeerListDataSource(this.paginator, this.sort, this.beerStoreService);
    }
}