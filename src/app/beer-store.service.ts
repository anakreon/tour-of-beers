import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

const beers = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Injectable({
    providedIn: 'root'
})
export class BeerStoreService {
    constructor (private messageService: MessageService) {}

    public getBeers (): Observable<any> {
        this.messageService.add('BeerStoreService: fetched beers');
        return of(beers);
    }

    public getBeer (beerId: number): Observable<any> {
        this.messageService.add(`BeerStoreService: fetched beer id=${beerId}`);
        return of(beers.find((beer) => beer.id === beerId));
    }
}