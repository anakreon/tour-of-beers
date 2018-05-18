import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AppBeerListDataSource } from './app-beers-datasource';
import { BeerStoreServiceService } from '../beer-store-service.service';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
    selector: 'app-beers',
    templateUrl: './app-beers.component.html',
    styleUrls: ['./app-beers.component.css']
})
export class AppBeersComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: AppBeerListDataSource;
    
    displayedColumns = ['name', 'ingredients', 'abv', 'epm', 'brewery'];

    constructor (private beerStoreService: BeerStoreServiceService, private afStorage: AngularFireStorage) {}

    ngOnInit() {
        this.dataSource = new AppBeerListDataSource(this.paginator, this.sort, this.beerStoreService);
    }
    
    upload(event) {
        // upload a file to firebase
        const id = Math.random().toString(36).substring(2);
        console.log(id);
        const ref = this.afStorage.ref(id);
        const task = ref.put(event.target.files[0]);
        const uploadProgress = task.percentageChanges();
    }
}