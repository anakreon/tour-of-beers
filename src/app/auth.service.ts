import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';
import { Observable } from '@firebase/util';
import { map } from 'rxjs/operators';

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
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    public logout (): Promise<any> {
        return this.afAuth.auth.signOut();
    }

    public getUser (): User {
        return this.user;
    }

    public getUserId (): any {
        return this.afAuth.user.pipe(
            map((user: User) => user && user.uid)
        );
    }
}
