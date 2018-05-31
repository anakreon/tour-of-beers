import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BeerStoreServiceService } from '../beer-store-service.service';
import { Beer } from '../app.types';
import { LoadingService } from '../loading.service';

export class AppBeerListDataSource extends DataSource<Beer> {

    private data: Beer[] = [];

    constructor (
        private paginator: MatPaginator, private sort: MatSort, private beerStoreService: BeerStoreServiceService, 
        private loadingService: LoadingService
    ) {
        super();
    }

    connect(): Observable<Beer[]> {
        const unsetLoading = this.loadingService.setLoading();
        const beerObservable = this.beerStoreService.getBeers().pipe(
            tap((beers: Beer[]) => {
                this.data = beers;
                this.paginator.length = beers.length;
                unsetLoading();
            })
        );
        const dataMutations = [
            beerObservable,
            this.paginator.page,
            this.sort.sortChange
        ];

        return merge(...dataMutations).pipe(
            map((beers: Beer[]) => {
                return this.getPagedData(this.getSortedData([...this.data]));
            })
        );
    }

    disconnect() { }

    private getPagedData(data: Beer[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    private getSortedData(data: Beer[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                default: return 0;
            }
        });
    }
}

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
