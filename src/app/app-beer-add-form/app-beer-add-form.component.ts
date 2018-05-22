import { Component, OnInit } from '@angular/core';
import { Beer } from '../app.types';
import { AngularFireStorage } from 'angularfire2/storage';

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

    constructor (private afStorage: AngularFireStorage) {}

    onSubmit() { this.submitted = true; }

    upload (event) {
        // upload a file to firebase
        const id = Math.random().toString(36).substring(2);
        const ref = this.afStorage.ref(id);
        const task = ref.put(event.target.files[0]);
        const uploadProgress = task.percentageChanges();
    }

}
