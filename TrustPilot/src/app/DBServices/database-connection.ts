import {AddReviewInterface} from "../DBServices/add-review-interface";

export class DatabaseConnection implements AddReviewInterface{
  username: string;
  rating: number;
  title: String;

   SaveReview(username: string, rating: number, title: string, reviewText: string, Company: string){
    console.log(username);
  }


}


