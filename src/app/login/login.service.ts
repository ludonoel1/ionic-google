import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { getAuth, GoogleAuthProvider, signInWithCredential, signOut, UserCredential } from 'firebase/auth';
import { FirebaseAuthentication, SignInResult } from '@capacitor-firebase/authentication';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  unsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) { }

  signInEmail(credentials: any): Promise<SignInResult> {
    return FirebaseAuthentication.signInWithEmailAndPassword({ email: credentials.email, password: credentials.password })
      .then((userInfos: SignInResult) => {
        return userInfos
      })
      .catch(err => {
        throw new Error(err.code)
      })
  }

  handleProvider(provider: string): Promise<UserCredential> {
    switch (provider) {
      case 'google':
        return FirebaseAuthentication.signInWithGoogle().then((result: SignInResult) => {
          const credential = GoogleAuthProvider.credential(result.credential?.idToken);
          return signInWithCredential(getAuth(), credential)
        })
        break;
      case 'facebook':
        //return FirebaseAuthentication.signInWithFacebook() //this.signInWithProvider(new FacebookAuthProvider());
        break;
      //only case for register by email
      case "email":
        this.router.navigate(['/register/0'])
    }
  }

  registerUser(credentials: any): Promise<boolean> {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => {
        this.sendVerificationMail()
        return this.signInEmail(credentials).then(userCredentials => { return true })
          .catch(error => { throw new Error(error.code) })
      })
      .catch(error => {
        throw new Error(error.code)
      });
  }

  sendVerificationMail() {
    return this.angularFireAuth.currentUser.then((user) => {
      return user.sendEmailVerification()
    });
  }

  passwordRecover(passwordResetEmail) {
    return this.angularFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
  }

  /* Sign out */
  signOut(): Promise<any> {
    return this.deleteCacheFolder().then(
      result => {
        console.log("cache cleared")
        return FirebaseAuthentication.signOut().then(() => {
          // 1. Sign out on the web layer
          const auth = getAuth();
          return signOut(auth);
        });
      }
    ).catch(
      reason => {
        console.log("cache not cleared", reason)
        return FirebaseAuthentication.signOut().then(() => {
          // 1. Sign out on the web layer
          const auth = getAuth();
          return signOut(auth);
        });
      }
    );
  }

  deleteCacheFolder() {
    return Filesystem.rmdir({
      directory: Directory.Cache,
      path: `CACHED-IMG`,
      recursive: true
    });
  }
}
