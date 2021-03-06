import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerStoreService } from '../../beer-store.service';
import { Beer } from '../../app.types';
import { switchMap } from 'rxjs/operators';
import { BeerImageService } from '../../beer-image.service';
import { LoadingService } from '../../loading.service';

@Component({
    selector: 'app-beer-edit',
    templateUrl: './beer-edit.component.html',
    styleUrls: ['./beer-edit.component.css']
})
export class BeerEditComponent implements OnInit {
    public picture: any;
    public pictureUrl: string;
    public pictureHasChanged = false;
    public beer: Beer;

    constructor (
        private route: ActivatedRoute, private router: Router, private beerStoreService: BeerStoreService, 
        private beerImageService: BeerImageService, private loadingService: LoadingService
    ) {}

    ngOnInit () {
        const unsetLoading = this.loadingService.setLoading();
        this.route.paramMap.pipe(
            switchMap((params) => {
                const beerId = params.get('id');
                return this.beerStoreService.getBeer(beerId);
            })
        )
        .subscribe((beer: Beer) => {
            this.initState();
            this.beer = beer;
            unsetLoading();
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
        this.beer = beer;
        const promise = this.uploadPicture()
            .then(() => this.beerStoreService.updateBeer(this.beer))
            .then(() => {
                this.navigateToBeerdetailPage(this.beer.id);
            });
        this.loadingService.wrapWithLoading(promise);
    }

    private navigateToBeerdetailPage (beerId) {
        this.router.navigate(['/detail/' + beerId]);
    }
    
    private uploadPicture (): Promise<void> {
        if (this.pictureHasChanged && this.picture) {
            return this.beerImageService.uploadPicture(this.beer.pictureId, this.picture).then((pictureId) => {
                this.beer.pictureId = pictureId;
                return this.updatePictureUrl(pictureId);
            });
        } else {
            return Promise.resolve();
        }
    }

    private updatePictureUrl (pictureId: string) {
        const promise = this.beerImageService.getDownloadUrlOrPlaceholder(pictureId).then((url) => {
            this.pictureUrl = url;
        });
        return this.loadingService.wrapWithLoading(promise);
    }

    public upload (file) {
        const unsetLoading = this.loadingService.setLoading();
        this.picture = file;
        this.pictureHasChanged = true;

        if (FileReader && file) {
            const fr = new FileReader();
            fr.onload = () => {
                this.pictureUrl = fr.result;
                unsetLoading();
            };
            fr.readAsDataURL(file);
        }
    }
}
