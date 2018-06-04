import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { AppBeersDataSource } from './app-beers-datasource';
import { BeerStoreServiceService } from '../beer-store-service.service';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { LoadingService } from '../loading.service';

@Component({
    selector: 'app-beers',
    templateUrl: './app-beers.component.html',
    styleUrls: ['./app-beers.component.css']
})
export class AppBeersComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    dataSource: AppBeersDataSource;
    
    displayedColumns = ['name', 'style', 'abv', 'epm', 'brewery'];

    constructor (private beerStoreService: BeerStoreServiceService, private loadingService: LoadingService) {}

    ngOnInit() {
        this.dataSource = new AppBeersDataSource(this.sort, this.beerStoreService, this.loadingService);
    }
}