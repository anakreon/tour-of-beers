import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Beer } from '../../app.types';

@Component({
    selector: 'app-beer-edit-form',
    templateUrl: './beer-edit-form.component.html',
    styleUrls: ['./beer-edit-form.component.css']
})
export class BeerEditFormComponent {
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
