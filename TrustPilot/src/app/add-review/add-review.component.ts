import {Component, Input, OnInit, Output} from '@angular/core';
import {ReviewService} from "../DBServices/reviewService";
import {Review} from "../app.model";



@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})


export class AddReviewComponent implements OnInit {
  username: string;
  title: string;
  review: string;
  name: string;
  rating: string;

  reviews: Review = {
    username: '',
    name: '',
    review: '',
    title: '',
    rating: ''
  };


  onSubmit() {


    this.reviews.username = "test";
    this.reviews.title = this.title;
    this.reviews.name = this.name;
    this.reviews.rating = this.rating;
    this.reviews.review = this.review;

    this.reviewService.addReview(this.reviews);
    console.log("review added");

  }

  constructor(private reviewService: ReviewService) {

  }

  ngOnInit() {
    console.log('hello');
  }

  companies = [
    {name: 'EAGames'}
  ]


}


