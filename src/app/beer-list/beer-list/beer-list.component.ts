import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { BeerListDataSource } from './beer-list-datasource';
import { BeerStoreService } from '../../beer-store.service';
import { LoadingService } from '../../loading.service';

@Component({
    selector: 'app-beer-list',
    templateUrl: './beer-list.component.html',
    styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    dataSource: BeerListDataSource;
    displayedColumns = ['name', 'style', 'abv', 'epm', 'brewery'];

    constructor (private beerStoreService: BeerStoreService, private loadingService: LoadingService) {}

    ngOnInit () {
        this.dataSource = new BeerListDataSource(this.sort, this.beerStoreService, this.loadingService);
    }
}