import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
    providedIn: 'root'
})
export class BeerImageService {
    constructor (private afStorage: AngularFireStorage) { }
    
    public uploadPicture (pictureId: string = this.generatePictureId(), picture: any): Promise<string> {
        const ref = this.afStorage.ref(pictureId);
        return ref.put(picture).then(() => pictureId);
    }
    private generatePictureId (): string {
        return Math.random().toString(36).substring(2);
    }

    public deletePictureForBeer (pictureId: string): Promise<void> {
        if (pictureId) {
            const ref = this.afStorage.ref(pictureId);
            return ref.delete().toPromise();
        } else {
            return Promise.resolve();
        }
    }
    
    public getDownloadUrlOrPlaceholder (pictureId: string): Promise<string> {
        if (pictureId) {
            return this.getDownloadUrl(pictureId);
        } else {
            return Promise.resolve('assets/beer_placeholder.jpg');
        }
    }
    private getDownloadUrl (pictureId: string): Promise<string> {
        const ref = this.afStorage.ref(pictureId);
        return ref.getDownloadURL().toPromise();
    }  
}
