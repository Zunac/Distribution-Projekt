import { Injectable } from '@angular/core';
import {DatabaseConnection} from "./database-connection";
import {Observable} from "rxjs";
import {AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Company} from "../models/Company";


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  companies: Observable<Company[]>;
  users: Observable<any[]>;
  reviews: Observable<any[]>;



  constructor(db: AngularFirestore) {
    this.companies = db.collection('Companies').valueChanges();
    this.users = db.collection('users').valueChanges();
    this.reviews = db.collection('Reviews').valueChanges();

  }

  getCompanies(){
    return this.companies;
  }
  getUsers(){
    return this.users;
  }
  getReviews(){
    return this.reviews;
  }

}
