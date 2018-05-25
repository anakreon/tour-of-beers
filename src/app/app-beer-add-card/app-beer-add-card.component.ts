import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BeerStoreServiceService } from '../beer-store-service.service';
import { BeerBase } from '../app.types';
import { Router } from '@angular/router';

@Component({
    selector: 'app-beer-add-card',
    templateUrl: './app-beer-add-card.component.html',
    styleUrls: ['./app-beer-add-card.component.css']
})

export class AppBeerAddCardComponent {
    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();

    public beer: BeerBase = {
        id: '',
        name: ''
    };

    constructor (private router: Router, private beerStoreService: BeerStoreServiceService) {}

    public stopPropagation (event): void {
        event.stopPropagation();
    }

    public submit () {
        this.beerStoreService.addBeer(this.beer)
            .then((beerId) => {
                this.navigateToBeerEditPage(beerId);
                this.closeMenu.emit();
            });
    }
    private navigateToBeerEditPage (beerId) {
        this.router.navigate(['/edit/' + beerId]);
    }
}
