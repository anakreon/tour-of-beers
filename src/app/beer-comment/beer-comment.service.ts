import { Injectable } from '@angular/core';
import { BeerComment } from '../app.types';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { map, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BeerCommentService {

    constructor (private afs: AngularFirestore) {}

    public getComments (beerId: string): Observable<BeerComment[]> {
        return this.afs.collection('comments').snapshotChanges().pipe(
            map((values: DocumentChangeAction<{}>[]) => {
                return values
                .map(this.buildCommentObjectForChangeAction)
                .filter((comment: BeerComment) => comment.beerId === beerId);
            })
        );
    }
    private buildCommentObjectForChangeAction (dca: DocumentChangeAction<{}>): BeerComment {
        const data = dca.payload.doc.data() as BeerComment;
        const id = dca.payload.doc.id;
        return { id, ...data };
    }

    public addComment (beerId: string, userId: string, userName: string, text: string): void {
        if (!text.trim()) {
            return;
        }
        const comment: BeerComment = {
            beerId,
            userId,
            userName,
            text,
            timestamp: Date.now()
        };
        const id = this.afs.createId();
        this.afs.collection<BeerComment>('comments').doc(id).set(comment);
    }

    public deleteComment (commentId: string): Promise<void> {
        return this.afs.doc<BeerComment>('comments/' + commentId).delete();
    }
    
    public deleteCommentsForBeer (beerId: string): Promise<void> {
        return this.afs.collection('comments').ref.where('beerId', '==', beerId).get().then((snapshot) => {
            const batch = this.afs.firestore.batch();
            snapshot.forEach((value) => batch.delete(value.ref));
            return batch.commit();
        });
    }
}
