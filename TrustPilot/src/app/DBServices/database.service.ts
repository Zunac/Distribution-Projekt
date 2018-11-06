import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Company} from "../models/Company";


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  compList: AngularFirestoreCollection<Company>;
  db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
  }

  addCompany(companyid: Company): any{
    this.compList = this.db.collection('Companies');
    this.compList.add(companyid);
    return true;
  }


}
