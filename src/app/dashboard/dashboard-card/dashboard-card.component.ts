import { Component, OnInit, Input } from '@angular/core';
import { BeerImageService } from '../../beer-image.service';
import { Beer } from '../../app.types';

@Component({
    selector: 'app-dashboard-card',
    templateUrl: './dashboard-card.component.html',
    styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
    @Input() beer: Beer;
    public beerPictureUrl: string;
    public isLoading = false;

    constructor (private beerImageService: BeerImageService) {}

    ngOnInit () {
        this.isLoading = true;
        this.beerImageService.getDownloadUrlOrPlaceholder(this.beer.pictureId).then((url: string) => {
            this.beerPictureUrl = url;
        });
    }
    public onImageLoad () {
        this.isLoading = false;
    }
}