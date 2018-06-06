import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Observable, merge } from 'rxjs';
import { BeerStoreService } from '../../beer-store.service';
import { Beer } from '../../app.types';
import { LoadingService } from '../../loading.service';

export class BeerListDataSource extends DataSource<Beer> {

    private unsetLoading: () => void;

    constructor (private sort: MatSort, private beerStoreService: BeerStoreService, private loadingService: LoadingService) {
        super();
    }

    connect (): Observable<Beer[]> {
        const displayDataChanges = [
            this.sort.sortChange
        ];
        return merge(...displayDataChanges).pipe(
            startWith(null),
            switchMap(() => {
                this.unsetLoading = this.loadingService.setLoading();
                return this.beerStoreService.getBeers();
            }),
            map((beers: Beer[]) => {
                this.unsetLoading();
                return this.getSortedData(beers);
            })
        );
    }

    disconnect() { }

    private getSortedData(data: Beer[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return this.compare(a.name, b.name, isAsc);
                case 'abv': return this.compare(a.abv, b.abv, isAsc);
                case 'style': return this.compare(a.style, b.style, isAsc);
                case 'epm': return this.compare(a.epm, b.epm, isAsc);
                case 'brewery': return this.compare(a.brewery, b.brewery, isAsc);
                default: return 0;
            }
        });
    }

    private compare (a: any, b: any, isAsc: boolean): number {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}