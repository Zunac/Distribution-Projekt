import {AddReviewInterface} from "../DBServices/add-review-interface";
import {AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import {Company} from "../models/Company";

export class DatabaseConnection {
  companies: Observable<any[]>;
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


