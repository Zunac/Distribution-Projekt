import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../services/reviewService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reviews;
  username: string;



  constructor(public revService: ReviewService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.username = params.name;
    })


    this.revService.getUserReviews(this.username).subscribe((data) => {
      this.reviews = data;
    });


    document.getElementById("title-id").innerText = this.username + " reviews:";

  }

}
