import { Component, OnInit } from '@angular/core';
import {UserInfoService} from "../services/user-info-service.service";
import {Router} from "@angular/router";
import {UserInfo} from "../app.model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  fore_name:string;
  last_name:string;
  country:string;
  address:string;
  user_type:string;


  registration:UserInfo = {
    fore_name:"",
    last_name:"",
    country:"",
    address:"",
    user_type:""
  };

  constructor(private userInfoService : UserInfoService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }
  onSubmit(value) {
    value.uid = this.authService.getUserDetails().uid;
    this.userInfoService.addUser(value);
    this.router.navigate(['']).catch();
  }

}
