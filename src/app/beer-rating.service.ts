import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, Action, DocumentSnapshot } from 'angularfire2/firestore';
import { BeerRating, BeerRatingResult, Beer } from './app.types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BeerRatingService {

    constructor (private afs: AngularFirestore) {}

    public getUserBeerRating (userId: string, beerId: string): Observable<number> {
        const id = userId + '_' + beerId;
        return this.afs.doc<BeerRating>('beer-ratings/' + id).snapshotChanges().pipe(
            map((value: Action<DocumentSnapshot<{}>>) => {
                return this.getRatingValueFromBeerObject(value);
            })
        );
    }

    private getRatingValueFromBeerObject (dca: Action<DocumentSnapshot<{}>>): number {
        const data = dca.payload.data() as BeerRating;
        return data ? data.rating : 0;
    }

    public deleteRatingsForBeer (beerId: string): Promise<void> {
        return this.afs.collection('beer-ratings').ref.where('beerId', '==', beerId).get().then((snapshot) => {
            const batch = this.afs.firestore.batch();
            snapshot.forEach((value) => batch.delete(value.ref));
            return batch.commit();
        });
    }

    public getBeerRating (beerId: string): Observable<BeerRatingResult> {
        return this.getBeerRatings(beerId).pipe(
            map((beerRatings: BeerRating[]) => {
                if (beerRatings.length) {
                    const sum = beerRatings.reduce((accumulator, ratingObject) => accumulator + ratingObject.rating, 0);
                    return {
                        count: beerRatings.length,
                        rating: sum / beerRatings.length
                    };
                } else {
                    return {
                        count: 0,
                        rating: 0
                    };
                }
            })
        );
    }

    public getAllBeerRatings (): Observable<BeerRating[]> {
        return this.afs.collection('beer-ratings').snapshotChanges().pipe(
            map((values: DocumentChangeAction<{}>[]) => {
                return values.map(this.buildBeerRatingObjectForChangeAction);
            })
        );
    }

    private getBeerRatings (beerId: string): Observable<BeerRating[]> {
        return this.afs.collection('beer-ratings', (ref: any) => ref.where('beerId', '==', beerId)).snapshotChanges().pipe(
            map((values: DocumentChangeAction<{}>[]) => {
                return values.map(this.buildBeerRatingObjectForChangeAction);
            })
        );
    }

    private buildBeerRatingObjectForChangeAction (dca: DocumentChangeAction<{}>): BeerRating {
        const data = dca.payload.doc.data() as BeerRating;
        const id = dca.payload.doc.id;
        return { id, ...data };
    }

    public rateBeer (userId: string, beerId: string, rating: number): Promise<void>  {
        const id = userId + '_' + beerId;
        const itemsCollection = this.afs.collection<BeerRating>('beer-ratings');
        const ratingObject: BeerRating = { userId, beerId, rating };
        return itemsCollection.doc(id).set(ratingObject);
    }
}
