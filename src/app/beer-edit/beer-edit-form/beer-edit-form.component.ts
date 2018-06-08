import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Beer } from '../../app.types';

@Component({
    selector: 'app-beer-edit-form',
    templateUrl: './beer-edit-form.component.html',
    styleUrls: ['./beer-edit-form.component.css']
})
export class BeerEditFormComponent implements OnChanges {
    @Input() beer: Beer;
    @Output() uploadRequest: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitRequest: EventEmitter<Beer> = new EventEmitter<Beer>();

    public beerForm: FormGroup;

    constructor (private location: Location, private fb: FormBuilder) {
        this.beerForm = fb.group({
            name: ['', Validators.required],
            style: ['', Validators.required],
            description: ['', Validators.required],
            ingredients: '',
            abv: ['', Validators.required],
            epm: '',
            brewery: ''
        });
    }
    
    ngOnChanges () {
        this.beerForm.reset({
            name: this.beer.name,
            style: this.beer.style || '',
            description: this.beer.description || '',
            ingredients: this.beer.ingredients || '',
            abv: this.beer.abv || '',
            epm: this.beer.epm || '',
            brewery: this.beer.brewery || ''
        });
    }

    public submit ($event) {
        this.beerForm.markAsDirty();
        if (this.beerForm.status === 'VALID') {
            this.submitForm();
        } else {
            this.validateFields();
        }
    }
    private submitForm () {
        const formModel = this.beerForm.value;
        const beer: Beer = {
            id: this.beer.id,
            pictureId: this.beer.pictureId || '',
            name: formModel.name as string,
            style: formModel.style as string,
            description: formModel.description as string,
            ingredients: formModel.ingredients as string,
            abv: formModel.abv as number,
            epm: formModel.epm as number,
            brewery: formModel.brewery as string
        };
        this.submitRequest.emit(beer);
    }
    private validateFields () {
        for (let inner in this.beerForm.controls) {
            this.beerForm.get(inner).markAsTouched();
            this.beerForm.get(inner).updateValueAndValidity();
        }
    }

    public upload (event: any): void {
        this.uploadRequest.emit(event.target.files[0]);
    }

    public goBack (): void {
        this.location.back();
    }

}
