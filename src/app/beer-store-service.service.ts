import { Beer, BeerBase } from './app.types';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, DocumentChangeAction, DocumentSnapshot, Action } from 'angularfire2/firestore';

@Injectable({
    providedIn: 'root'
})
export class BeerStoreServiceService {
    private beers: Observable<any[]>;

    constructor (private afs: AngularFirestore) {}

    public getBeers (): Observable<Beer[]> {
        return this.afs.collection('beers').snapshotChanges().pipe(
            map((values: DocumentChangeAction<{}>[]) => {
                return values.map(this.buildBeerObjectForChangeAction);
            })
        );
    }

    public getBeer (beerId: string): any {
        return this.afs.doc<Beer>('beers/' + beerId).snapshotChanges().pipe(
            map((value: Action<DocumentSnapshot<{}>>) => {
                return this.buildBeerObjectForSnapshot(value);
            })
        );
    }

    private buildBeerObjectForChangeAction (dca: DocumentChangeAction<{}>): Beer {
        const data = dca.payload.doc.data() as Beer;
        const id = dca.payload.doc.id;
        return { id, ...data };
    }

    private buildBeerObjectForSnapshot (dca: Action<DocumentSnapshot<{}>>): Beer {
        const data = dca.payload.data() as Beer;
        const id = dca.payload.id;
        return { id, ...data };
    }

    public addBeer (beer: BeerBase): Promise<string>  {
        beer.id = this.afs.createId();
        return this.storeBeerAtId(beer).then(() => beer.id);
    }

    public updateBeer (beer: Beer): Promise<void> {
        return this.storeBeerAtId(beer);
    }

    private storeBeerAtId (beer: BeerBase): Promise<void> {
        const { id, ...beerWithoutId } = beer;
        const itemsCollection = this.afs.collection<BeerBase>('beers');
        return itemsCollection.doc(id).set(beerWithoutId);
    }
}
