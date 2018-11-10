import { Component, OnInit } from '@angular/core';
import {UserInfoService} from "../services/user-info-service.service";
import {Router} from "@angular/router";
import {UserInfo} from "../app.model";

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


  registration:UserInfo;

  constructor(private userInfoService : UserInfoService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(value) {
    this.userInfoService.addUser(this.registration);
    this.router.navigate(['']).catch();
  }

}
