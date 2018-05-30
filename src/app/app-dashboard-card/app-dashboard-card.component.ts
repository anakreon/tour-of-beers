import { Component, OnInit, Input } from '@angular/core';
import { BeerImageService } from '../beer-image.service';
import { Beer } from '../app.types';

@Component({
    selector: 'app-dashboard-card',
    templateUrl: './app-dashboard-card.component.html',
    styleUrls: ['./app-dashboard-card.component.css']
})
export class AppDashboardCardComponent implements OnInit {
    @Input() beer: Beer;
    public beerPictureUrl: string;

    constructor (private beerImageService: BeerImageService) { }

    ngOnInit () {
        this.beerImageService.getDownloadUrlOrPlaceholder(this.beer.pictureId).then((url) => {
            this.beerPictureUrl = url;
        });
    }

}
