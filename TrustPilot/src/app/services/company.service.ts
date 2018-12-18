import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Company, Review} from "../app.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  angList: AngularFirestoreCollection<Company>;
  angRList: AngularFirestoreCollection<Review>;
  compList = [];
  list: Observable<Company[]>;
  rList:Observable<Review[]>;
  reviewList = [];
  name: string;

  constructor(private db: AngularFirestore) {
  }


  addCompany(company): any{
    this.angList = this.db.collection('Companies');
    this.angList.add(company);
    return true;
  }

  getCompany(companyName: String){
    this.angList = this.db.collection('Companies', ref => ref.where('name', '==', companyName));

    this.list = this.angList.valueChanges();
    this.compList = [];
    this.list.subscribe((data: Company[]) => {

      data.forEach((comp: Company) => {

        this.compList.push(comp);

        }
      )
    });
    console.log(this.compList);
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

  getReviews(companyName: String){
    this.angRList = this.db.collection('Reviews', ref => ref.where('companyname', '==', companyName));
    this.rList = this.angRList.valueChanges();
    this.reviewList = [];
    this.rList.subscribe((rData: Review[]) => {

      rData.forEach((review: Review) => {
          this.reviewList.push(review);

        }
      )
    });

    return this.reviewList;


  }

  setCompanyname(name: string){
    this.name = name;
  }

  getCompanyname(){
    return this.name;
  }


}
