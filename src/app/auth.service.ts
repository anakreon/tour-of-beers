import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: User;

    constructor (public afAuth: AngularFireAuth) {
        afAuth.user.subscribe((user) => {
            this.user = user;
            console.log(user.uid);
        });
    }

    public isAuthenticated (): boolean {
        return this.user && !this.user.isAnonymous;
    }

    public login (): Promise<any> {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    public logout (): Promise<any> {
        return this.afAuth.auth.signOut();
    }

    public getUser (): User {
        return this.user;
    }
}
