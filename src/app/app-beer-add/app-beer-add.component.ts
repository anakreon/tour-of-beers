import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { BeerStoreServiceService } from '../beer-store-service.service';
import { Beer } from '../app.types';

@Component({
    selector: 'app-beer-add',
    templateUrl: './app-beer-add.component.html',
    styleUrls: ['./app-beer-add.component.css']
})
export class AppBeerAddComponent {

    picture: any;
    pictureUrl: string;

    beer: Beer = {
        id: '',
        name: '',
        ingredients: '',
        abv: 0,
        epm: 0,
        brewery: '',
        pictureId: ''
    };

    constructor (private afStorage: AngularFireStorage, private beerStoreService: BeerStoreServiceService) { }

    public submit (beer: Beer) { 
        this.uploadPicture();
        this.beerStoreService.addBeer(beer);        
    }

    private uploadPicture () {
        if (this.picture) {
            const pictureId = this.generatePictureId();
            this.beer.pictureId = pictureId;
            const ref = this.afStorage.ref(pictureId);
            const task = ref.put(this.picture);
            task.then(() => {
                ref.getDownloadURL().subscribe((url) => {
                    this.pictureUrl = url;
                });
            })
            const uploadProgress = task.percentageChanges();
        }
    }

    private generatePictureId (): string {
        return Math.random().toString(36).substring(2);
    }

    public upload (file) {
        this.picture = file;
    }

}
