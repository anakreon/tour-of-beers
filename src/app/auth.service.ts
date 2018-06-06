import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { User } from '@firebase/auth-types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: User;

    constructor (public afAuth: AngularFireAuth) {
        afAuth.user.subscribe((user) => {
            this.user = user;
        });
    }

    public isAuthenticated (): boolean {
        return this.user && !this.user.isAnonymous;
    }

    public login (): Promise<any> {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout (): Promise<any> {
        return this.afAuth.auth.signOut();
    }

    public getUser (): User {
        return this.user;
    }

    public getUserId (): Observable<string> {
        return this.afAuth.user.pipe(
            map((user: User) => user && user.uid)
        );
    }
}
