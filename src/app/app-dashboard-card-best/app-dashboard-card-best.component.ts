import { Component, OnInit, Input } from '@angular/core';
import { BeerImageService } from '../beer-image.service';
import { Beer } from '../app.types';

@Component({
    selector: 'app-dashboard-card-best',
    templateUrl: './app-dashboard-card-best.component.html',
    styleUrls: ['./app-dashboard-card-best.component.css']
})
export class AppDashboardCardBestComponent implements OnInit {
    @Input() beer: Beer;
    public beerPictureUrl: string;

    constructor (private beerImageService: BeerImageService) { }

    ngOnInit () {
        this.beerImageService.getDownloadUrlOrPlaceholder(this.beer.pictureId).then((url) => {
            this.beerPictureUrl = url;
        });
    }
}
