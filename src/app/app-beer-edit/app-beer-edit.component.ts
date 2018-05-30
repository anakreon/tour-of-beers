import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { BeerStoreServiceService } from '../beer-store-service.service';
import { Beer } from '../app.types';
import { switchMap } from 'rxjs/operators';
import { BeerImageService } from '../beer-image.service';

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
        private route: ActivatedRoute, private router: Router, private beerStoreService: BeerStoreServiceService, 
        private beerImageService: BeerImageService
    ) {}

    ngOnInit () {
        this.route.paramMap.pipe(
            switchMap((params) => {
                const beerId = params.get('id');
                return this.beerStoreService.getBeer(beerId);
            })
        )
        .subscribe((beer: Beer) => {
            this.initState();
            this.beer = beer;
            if (this.beer.pictureId) {
                this.updatePictureUrl(this.beer.pictureId);
            }
        });
    }

    private initState () {
        this.picture = null;
        this.pictureUrl = null;
        this.pictureHasChanged = false;
    }

    public submit (beer: Beer) { 
        this.uploadPicture()
            .then(() => {
                return this.beerStoreService.updateBeer(beer);
            })
            .then(() => {
                this.navigateToBeerdetailPage(beer.id);
            });
    }

    private navigateToBeerdetailPage (beerId) {
        this.router.navigate(['/detail/' + beerId]);
    }
    
    private uploadPicture (): Promise<void> {
        if (this.pictureHasChanged && this.picture) {
            this.beerImageService.uploadPicture(this.beer.pictureId, this.picture).then((pictureId) => {
                this.beer.pictureId = pictureId;
                this.updatePictureUrl(pictureId);
            });
        } else {
            return Promise.resolve();
        }
    }

    private updatePictureUrl (pictureId: string) {
        this.beerImageService.getDownloadUrl(pictureId).then((url) => {
            this.pictureUrl = url;
        });
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
