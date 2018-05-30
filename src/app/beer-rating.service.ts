import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, Action, DocumentSnapshot } from 'angularfire2/firestore';
import { BeerRating } from './app.types';
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

    public getBeerRating (beerId: string): Observable<number> {
        return this.getBeerRatings(beerId).pipe(
            map((beerRatings: BeerRating[]) => {
                if (beerRatings.length) {
                    const sum = beerRatings.reduce((accumulator, ratingObject) => accumulator + ratingObject.rating, 0);
                    return sum / beerRatings.length;
                } else {
                    return 0;
                }
            })
        );
    }

    /*public getBeerIdsOrderedByRating (limit: number):  {

    }*/

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
