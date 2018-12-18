import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Review} from "../app.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  angList: AngularFirestoreCollection<Review>;
  reviewList = [];
  list: Observable<Review[]>;

  constructor(private db: AngularFirestore) {
  }


  addReview(review): any{
    this.angList = this.db.collection('Reviews');
    this.angList.add(review);
    return true;
  }

  getReview(reviewTitle: String){
    this.angList = this.db.collection('Reviews', ref => ref.where('bane', '==', reviewTitle));
    this.list.subscribe((data: Review[]) => {
      this.reviewList = [];
      data.forEach((review: Review) => {
          this.reviewList.push(review);
        }
      )
    })
    return this.reviewList
  }

  getCompanyList(){
    this.list = this.db.collection<Review>('Reviews').valueChanges();
    this.reviewList = [];
    this.list.subscribe((data: Review[]) => {
      data.forEach((review: Review) => {
          this.reviewList.push(review);
        }
      )
    });
    return this.reviewList;

  }


}
