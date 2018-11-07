import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Company } from "../app.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  angList: AngularFirestoreCollection<Company>;
  compList = [];
  list: Observable<Company[]>;

  constructor(private db: AngularFirestore) {
  }


  addCompany(company): any{
    this.angList = this.db.collection('Companies');
    this.angList.add(company);
    return true;
  }

  getCompany(companyName: String){
    this.angList = this.db.collection('Companies', ref => ref.where('bane', '==', companyName));
    this.list.subscribe((data: Company[]) => {
      this.compList = [];
      data.forEach((comp: Company) => {
          this.compList.push(comp);
        }
      )
    })
    return this.compList
  }

  getCompanyList(){
    this.list = this.db.collection<Company>('Companies').valueChanges();
    this.compList = [];
    this.list.subscribe((data: Company[]) => {
      data.forEach((comp: Company) => {
          this.compList.push(comp);
        }
      )
    });
    console.log(this.compList)
    return this.compList;

  }


}
