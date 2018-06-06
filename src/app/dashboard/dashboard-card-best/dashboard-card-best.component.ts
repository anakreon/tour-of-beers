import { Component, OnInit, Input } from '@angular/core';
import { BeerImageService } from '../../beer-image.service';
import { Beer } from '../../app.types';

@Component({
    selector: 'app-dashboard-card-best',
    templateUrl: './dashboard-card-best.component.html',
    styleUrls: ['./dashboard-card-best.component.css']
})
export class DashboardCardBestComponent implements OnInit {
    @Input() beer: Beer;
    public beerPictureUrl: string;
    public isLoading = false;

    constructor (private beerImageService: BeerImageService) {}

    ngOnInit () {
        this.isLoading = true;
        this.beerImageService.getDownloadUrlOrPlaceholder(this.beer.pictureId).then((url) => {
            this.beerPictureUrl = url;
        });
    }
    public onImageLoad () {
        this.isLoading = false;
    }
}
