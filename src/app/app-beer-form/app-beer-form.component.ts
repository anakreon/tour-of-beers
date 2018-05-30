import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Beer } from '../app.types';
import { Location } from '@angular/common';

@Component({
    selector: 'app-beer-form',
    templateUrl: './app-beer-form.component.html',
    styleUrls: ['./app-beer-form.component.css']
})
export class AppBeerFormComponent {
    @Input() beer: Beer;
    @Output() uploadRequest: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitRequest: EventEmitter<Beer> = new EventEmitter<Beer>();

    constructor (private location: Location) {}
    
    public submit ($event) { 
        this.submitRequest.emit(this.beer);
    }

    public upload (event: any): void {
        this.uploadRequest.emit(event.target.files[0]);
    }

    public goBack (): void {
        this.location.back();
    }

}
