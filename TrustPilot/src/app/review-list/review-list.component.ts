import { Component, OnInit } from '@angular/core';
import {Review} from "../app.model";
import {CompanyService} from "../DBServices/company.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: Review[];
  company_name: string;



  constructor(public compService: CompanyService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.company_name = params.name;
    })


    this.reviews = this.compService.getReviews(this.company_name);

    document.getElementById("title-id").innerText = this.company_name;

  }



}
