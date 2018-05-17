import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BeerStoreServiceService } from '../beer-store-service.service';

export interface AppBeerListItem {
    id: number;
    name: string;
    ingredients: string;
    alcohol: number;
    epm: number;
    brewery: string;
}

export class AppBeerListDataSource extends DataSource<AppBeerListItem> {

    private data: AppBeerListItem[] = [];

    constructor (private paginator: MatPaginator, private sort: MatSort, private beerStoreService: BeerStoreServiceService) {
        super();
    }

    connect(): Observable<AppBeerListItem[]> {
        const beerObservable = this.beerStoreService.getBeers().pipe(
            tap((beers: AppBeerListItem[]) => {
                this.data = beers;
                this.paginator.length = beers.length;
            })
        );
        const dataMutations = [
            beerObservable,
            this.paginator.page,
            this.sort.sortChange
        ];

        return merge(...dataMutations).pipe(
            map((beers: AppBeerListItem[]) => {
                return this.getPagedData(this.getSortedData([...this.data]));
            })
        );
    }

    disconnect() { }

    private getPagedData(data: AppBeerListItem[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    private getSortedData(data: AppBeerListItem[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    }
}

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
