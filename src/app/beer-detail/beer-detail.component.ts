import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BeerStoreService } from '../beer-store.service';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
    
    beer;

    constructor (private route: ActivatedRoute, private beerStoreService: BeerStoreService, private location: Location) {}

    ngOnInit () {
        this.getBeer();
    }

    getBeer (): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.beerStoreService.getBeer(parseInt(id)).subscribe((beer) => {
            this.beer = beer;
        });
    }

    goBack(): void {
        this.location.back();
    }

}
