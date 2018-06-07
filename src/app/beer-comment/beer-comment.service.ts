import { Injectable } from '@angular/core';
import { BeerComment } from '../app.types';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BeerCommentService {

    constructor (private afs: AngularFirestore) {}

    public getComments (beerId: string): Observable<BeerComment[]> {
        return this.afs.collection('comments').snapshotChanges().pipe(
            map((values: DocumentChangeAction<{}>[]) => {
                return values.map(this.buildCommentObjectForChangeAction);
            })
        );
    }
    private buildCommentObjectForChangeAction (dca: DocumentChangeAction<{}>): BeerComment {
        const data = dca.payload.doc.data() as BeerComment;
        const id = dca.payload.doc.id;
        return { id, ...data };
    }

    public addComment (beerId: string, userId: string, userName: string, text: string): void {
        const comment: BeerComment = {
            userId,
            userName,
            text,
            timestamp: Date.now()
        };
        const id = this.afs.createId();
        this.afs.collection<BeerComment>('comments').doc(id).set(comment);
    }
}
