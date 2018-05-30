import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BeerImageService {

    constructor (private afStorage: AngularFireStorage) { }
    
    public uploadPicture (pictureId: string = this.generatePictureId(), picture: any): Promise<string> {
        const ref = this.afStorage.ref(pictureId);
        return ref.put(picture).then(() => pictureId);
    }

    public getDownloadUrl (pictureId: string): Promise<string> {
        const ref = this.afStorage.ref(pictureId);
        return ref.getDownloadURL().toPromise();
    }

    private generatePictureId (): string {
        return Math.random().toString(36).substring(2);
    }
}
