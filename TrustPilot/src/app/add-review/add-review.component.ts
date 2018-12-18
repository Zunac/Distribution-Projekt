import {Component, Input, OnInit, Output} from '@angular/core';
import {ReviewService} from "../services/reviewService";
import {Review} from "../app.model";
import {CompanyService} from "../services/company.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})


export class AddReviewComponent implements OnInit {
  username: string;
  title: string;
  review: string;
  companyname: string;
  rating: string;

  reviews: Review = {
    username: '',
    companyname: '',
    review: '',
    title: '',
    rating: ''
  };


  onSubmit() {


    this.reviews.username = "test";
    this.reviews.title = this.title;
    this.reviews.companyname = this.companyname;
    this.reviews.rating = this.rating;
    this.reviews.review = this.review;

    this.reviewService.addReview(this.reviews);
    console.log("review added");

    this.router.navigate(['/'])
  }

  constructor(private reviewService: ReviewService, private companyService: CompanyService, private router: Router) {

  }

  ngOnInit() {
    this.companies = this.companyService.getCompanyList();
  }

  companies = []





}


