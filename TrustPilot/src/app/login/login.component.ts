import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { NgFlashMessageService } from "ng-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private authService: AuthService,
              private router: Router,
              private flash: NgFlashMessageService) {

  }

  ngOnInit() {
  }


  onSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticate(user).subscribe(data => {
      if(data['success']){
        this.authService.storeData(data['user'], data['token']);
        this.flash.showFlashMessage({
          messages: ['successfully logged in'],
          timeout: 3000,
          type: 'success'
        });
        this.router.navigate(['/']);
      } else {
        this.flash.showFlashMessage({
          messages: [data['msg']],
          timeout: 3000,
          type: 'danger'
        });
      }
    });
  }
}
