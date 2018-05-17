import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './app-beer-detail.component.html',
    styleUrls: ['./app-beer-detail.component.css']
})
export class AppBeerDetailComponent implements OnInit {
    
    beer;

    constructor (private route: ActivatedRoute, private location: Location) {}

    ngOnInit () {
        this.getBeer();
    }

    getBeer (): void {
        const id = this.route.snapshot.paramMap.get('id');
        /*this.beerStoreService.getBeer(parseInt(id)).subscribe((beer) => {
            this.beer = beer;
        });*/
    }

    goBack(): void {
        this.location.back();
    }

}
