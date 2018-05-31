import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BeerStoreServiceService } from '../beer-store-service.service';
import { BeerBase } from '../app.types';
import { Router } from '@angular/router';

@Component({
    selector: 'app-beer-add-card',
    templateUrl: './app-beer-add-card.component.html',
    styleUrls: ['./app-beer-add-card.component.css']
})

export class AppBeerAddCardComponent implements OnInit {
    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();
    public isLoading = false;
    public beer: BeerBase;

    constructor (private router: Router, private beerStoreService: BeerStoreServiceService) {}

    ngOnInit () {
        this.resetBeer();
    }

    private resetBeer (): void {
        this.beer = {
            id: '',
            name: ''
        };
    }

    public stopPropagation (event): void {
        event.stopPropagation();
    }

    public submit () {
        this.isLoading = true;
        this.beerStoreService.addBeer(this.beer).then((beerId) => {
            this.navigateToBeerEditPage(beerId);
            this.resetBeer();
            this.closeMenu.emit();
            this.isLoading = false;
        })
    }
    private navigateToBeerEditPage (beerId) {
        this.router.navigate(['/edit/' + beerId]);
    }
}
