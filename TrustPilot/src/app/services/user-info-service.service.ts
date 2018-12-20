import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Company, UserInfo} from "../app.model";
import {Observable} from "rxjs";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  angList: AngularFirestoreCollection<UserInfo>;
  userList = [];
  list: Observable<UserInfo[]>;

  constructor(private db: AngularFirestore) {
  }


  addUser(user): any{
    this.angList = this.db.collection('users');
    this.angList.add(user);
    return true;
  }

  getUser(uid: String){
    return new Promise((resolve, reject) => {
      this.angList = this.db.collection('users', ref => ref.where('uid', '==', uid));
      this.list = this.angList.valueChanges();
      this.list.subscribe((data: UserInfo[]) => {
        this.userList = [];
        data.forEach((user: UserInfo) => {
            resolve(user);
          }
        )
        resolve(null);
      })
    })
  }

  userRegistered(uid: string) {
    //Async check if the user exists. Returns true if user is found.
    return new Promise(resolve => {this.getUser(uid).then(value => resolve(value!=null))})
  }

  getUserList(){
    this.list = this.db.collection<UserInfo>('users').valueChanges();
    this.userList = [];
    this.list.subscribe((data: UserInfo[]) => {
      data.forEach((user: UserInfo) => {
          this.userList.push(user);
        }
      )
    });
    console.log(this.userList)
    return this.userList;

  }


}
