import { Component, OnInit } from '@angular/core';
import {Review} from "../app.model";
import {CompanyService} from "../DBServices/company.service";


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: Review[];
  company_name: string;



  constructor(public compService: CompanyService) {

  }

  ngOnInit() {
    this.reviews = this.compService.getReviews("kljdfs");

  }



}
