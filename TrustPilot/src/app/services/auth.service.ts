import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      }
    );

  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  isLoggedIn() {
    if(this.userDetails == null) {
      return false;
    } else {
      return true;
    }

  }

  logout() {
    this.userDetails = null;
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

  getUserDetails() {
    return this.userDetails;
  }

}

class UserInfo {

  constructor(name: string, uid:string, email:string) {
    this.name = name;
    this.uid = uid;
    this.email = email;
  }

  getUid() {
    return this.uid;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  private name : string;
  private uid : string;
  private email : string;
}
