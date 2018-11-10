import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {UserInfoService} from "../services/user-info-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userInfoService: UserInfoService) {
  }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.userInfoService.userRegistered(this.authService.getUserDetails().uid).then(value => {
          if(value) {
            this.router.navigate([''])
          } else {
            this.router.navigate(['sign_up'])
          }
        })
      })
      .catch((err) => console.log(err));
  }

}
