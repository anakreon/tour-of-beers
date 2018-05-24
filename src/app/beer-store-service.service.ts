import { Beer } from './app.types';
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

    public addBeer (beer: Beer): void {
        const id = this.afs.createId();
        this.storeBeerAtId(id, beer);
    }

    public updateBeer (beer: Beer): void {
        const id = beer.id;
        this.storeBeerAtId(id, beer);
    }

    private storeBeerAtId (id: string, beer: Beer) {
        delete beer.id;
        const itemsCollection = this.afs.collection<Beer>('beers');
        itemsCollection.doc(id).set(beer);
    }
}
