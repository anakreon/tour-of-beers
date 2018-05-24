import { Component, OnInit } from '@angular/core';
import { Beer } from '../app.types';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector: 'app-beer-add-form',
    templateUrl: './app-beer-add-form.component.html',
    styleUrls: ['./app-beer-add-form.component.css']
})
export class AppBeerAddFormComponent {
    picture: any;

    model: Beer = {
        id: '',
        name: '',
        ingredients: '',
        abv: 0,
        epm: 0,
        brewery: '',
        pictureId: null
    };

    submitted = false;

    constructor (private afStorage: AngularFireStorage, private afs: AngularFirestore) {}

    submit ($event) { 
        this.submitted = true; 
        
        const id = Math.random().toString(36).substring(2);
        this.model.pictureId = id;
        console.log('submitting: ', this.model);
        /*
        const ref = this.afStorage.ref(id);
        const task = ref.put(this.picture);
        const uploadProgress = task.percentageChanges();
        */
        
    }

    upload (event) {
        this.picture = event.target.files[0];
    }

}
