import { Component, OnInit } from '@angular/core';
import { Beer } from '../app.types';

@Component({
    selector: 'app-beer-add-form',
    templateUrl: './app-beer-add-form.component.html',
    styleUrls: ['./app-beer-add-form.component.css']
})
export class AppBeerAddFormComponent {

    model: Beer = {
        id: '',
        name: '',
        ingredients: '',
        abv: 0,
        epm: 0,
        brewery: ''
    };

    submitted = false;

    onSubmit() { this.submitted = true; }

}
