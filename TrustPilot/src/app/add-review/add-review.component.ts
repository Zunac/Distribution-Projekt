import {Component, OnInit} from '@angular/core';
import {ReviewService} from "../services/reviewService";
import {Review} from "../app.model";
import {CompanyService} from "../services/company.service";
import {Router} from "@angular/router";
import { NgFlashMessageService } from "ng-flash-messages";
import {ValidateService} from "../services/validateService";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})


export class AddReviewComponent implements OnInit {
  username: string = "";
  title: string = "";
  review: string = "";
  companyname: string = "";
  rating: number = 0;

  companies;

  constructor(private reviewService: ReviewService,
              private companyService: CompanyService,
              private router: Router,
              private flash: NgFlashMessageService,
              private validate: ValidateService,
              private auth: AuthService) {}


  onSubmit() {
    let review: Review = {
      username: this.auth.getUser(),
      companyname: this.companyname,
      review: this.review,
      title: this.title,
      rating: this.rating.toString()
    };

    if(this.validate.validateReview(review)){
      this.reviewService.addReview(review).subscribe((data) => {
        if(data['success']){
          this.flash.showFlashMessage({
            messages: ['Review added!'],
            timeout: 3000,
            type: 'success'
          });
          this.router.navigate(['/'])
        } else {
          this.flash.showFlashMessage({
            messages: ['Service unavailable at the moment!'],
            timeout: 3000,
            type: 'danger'
          });
        };
      });
    } else {
      this.flash.showFlashMessage({
        messages: ['Invalid review please try again!'],
        timeout: 3000,
        type: 'danger'
      });
    }
  }


  ngOnInit() {
    this.companyService.getCompanyList().subscribe(data => {
      this.companies = data;
    });
  }
}


