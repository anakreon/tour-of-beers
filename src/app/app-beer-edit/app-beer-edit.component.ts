import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { BeerStoreServiceService } from '../beer-store-service.service';
import { Beer } from '../app.types';

@Component({
    selector: 'app-beer-edit',
    templateUrl: './app-beer-edit.component.html',
    styleUrls: ['./app-beer-edit.component.css']
})
export class AppBeerEditComponent implements OnInit {

    picture: any;
    pictureUrl: string;
    pictureHasChanged = false;

    beer: Beer;

    constructor (
        private route: ActivatedRoute, private afStorage: AngularFireStorage, private beerStoreService: BeerStoreServiceService
    ) {}

    ngOnInit () {
        this.getBeer();
    }

    private getBeer (): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.beerStoreService.getBeer(id).subscribe((beer) => {
            this.beer = beer;
            
            if (this.beer.pictureId) {
                const ref = this.afStorage.ref(this.beer.pictureId);
                ref.getDownloadURL().subscribe((url) => {
                    this.pictureUrl = url;
                });
            }
        });
    }

    public submit (beer: Beer) { 
        this.uploadPicture().then(() => {
            this.beerStoreService.updateBeer(beer);
        });
    }
    
    private uploadPicture (): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.pictureHasChanged && this.picture) {
                this.beer.pictureId = this.beer.pictureId || this.generatePictureId();
                const ref = this.afStorage.ref(this.beer.pictureId);
                const task = ref.put(this.picture);
                task.then(() => {
                    ref.getDownloadURL().subscribe((url) => {
                        this.pictureUrl = url;
                    });
                    resolve();
                })
                const uploadProgress = task.percentageChanges();
            } else {
                resolve();
            }
        });
    }

    private generatePictureId (): string {
        return Math.random().toString(36).substring(2);
    }

    public upload (file) {
        this.picture = file;
        this.pictureHasChanged = true;

        if (FileReader && file) {
            const fr = new FileReader();
            fr.onload = () => {
                this.pictureUrl = fr.result;
            };
            fr.readAsDataURL(file);
        }
    }

}
