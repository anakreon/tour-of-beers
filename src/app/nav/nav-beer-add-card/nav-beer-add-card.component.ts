import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BeerStoreService } from '../../beer-store.service';
import { BeerBase } from '../../app.types';

@Component({
    selector: 'app-nav-beer-add-card',
    templateUrl: './nav-beer-add-card.component.html',
    styleUrls: ['./nav-beer-add-card.component.css']
})
export class NavBeerAddCardComponent implements OnInit {
    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();
    public isLoading = false;
    public beer: BeerBase;

    constructor (private router: Router, private beerStoreService: BeerStoreService) {}

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
