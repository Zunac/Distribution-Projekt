import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../services/reviewService";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {NgFlashMessageService} from "ng-flash-messages";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reviews;
  username: string;



  constructor(private revService: ReviewService,
              private route: ActivatedRoute,
              private auth: AuthService,
              private flash: NgFlashMessageService) {

  }

  ngOnInit() {

    this.reloadUI();

  }

  isCurrentUser(){
    if(this.auth.getUser() != undefined && this.username == this.auth.getUser()){
      return true
    }
    return false
  }

  reloadUI(){
    this.route.queryParams.subscribe(params => {
      this.username = params.name;
    })


    this.revService.getUserReviews(this.username).subscribe((data) => {
      this.reviews = data;
    });


    document.getElementById("title-id").innerText = this.username + " reviews:";
  }

  onRemoveSubmit(id) {
    this.revService.removeReview(id).subscribe( (data) => {
      if(data['success']){
        this.flash.showFlashMessage({
          messages: ['Review removed!'],
          timeout: 3000,
          type: 'success'
        });
        this.reloadUI();
      } else {
        this.flash.showFlashMessage({
          messages: ['Failed to remove review!'],
          timeout: 3000,
          type: 'danger'
        });
      }
    })
  }

}
