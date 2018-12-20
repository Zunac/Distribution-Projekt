import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../services/registerService";
import {Router} from "@angular/router";
import {UserInfo} from "../app.model";
import { ValidateService } from "../services/validateService";
import { NgFlashMessageService } from "ng-flash-messages";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name:string;
  username:string;
  email:string;
  password:string;
  repeatpassword: string;


  constructor(private validateService: ValidateService,
              private userInfoService : RegisterService,
              private router: Router,
              private FlashMessageService: NgFlashMessageService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.password != this.repeatpassword){
      this.FlashMessageService.showFlashMessage({
        messages: ["Password doesn't match"],
        timeout: 3000,
        type: 'danger'
      });
    } else {

      const user: UserInfo = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      };

      if(!this.validateService.validateRegister(user)){
        this.FlashMessageService.showFlashMessage({
          messages: ["Fields can't be empty"],
          timeout: 3000,
          type: 'danger'
        });
         return false
      }

      if(!this.validateService.validateEmail(user.email)){
        this.FlashMessageService.showFlashMessage({
          messages: ["Please enter an valid email"],
          timeout: 3000,
          type: 'danger'
        });
          return false
      }

      this.userInfoService.registerUser(user).subscribe( data => {
        if(data['success']){
          this.FlashMessageService.showFlashMessage({
            messages: ["User Successfully registered"],
            timeout: 3000,
            type: 'success'
          });
          this.router.navigate(['/login']);
        } else {
          this.FlashMessageService.showFlashMessage({
            messages: ["Something went wrong"],
            timeout: 3000,
            type: 'danger'
          });
        }
      }, error => {
        this.FlashMessageService.showFlashMessage({
          messages: ['Service currently unavailable, please try again later!'],
          timeout: 3000,
          type: 'danger'
        });
      });
    }
  }

}
