import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from '@firebase/auth-types';

@Component({
    selector: 'app-nav-user',
    templateUrl: './app-nav-user.component.html',
    styleUrls: ['./app-nav-user.component.css']
})
export class AppNavUserComponent implements OnInit {
    
    constructor (public afAuth: AngularFireAuth) { }

    ngOnInit() {

    }

    public login () {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    public logout () {
        this.afAuth.auth.signOut();
    }

}
