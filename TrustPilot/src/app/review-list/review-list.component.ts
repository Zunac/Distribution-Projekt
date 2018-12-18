import { Component, OnInit } from '@angular/core';
import {Review} from "../app.model";
import {ReviewService} from "../services/reviewService";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews;
  company_name: string;



  constructor(public revService: ReviewService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.company_name = params.name;
    })


    this.revService.getReviews(this.company_name).subscribe((data) => {
      this.reviews = data;
    });


    document.getElementById("title-id").innerText = this.company_name + " reviews:";

  }



}
