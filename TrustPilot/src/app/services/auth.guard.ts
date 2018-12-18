import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
import { NgFlashMessageService } from "ng-flash-messages";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
              private myRoute: Router,
              private flash: NgFlashMessageService){
  }

  canActivate() {
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      this.flash.showFlashMessage({
        messages: ['You are not logged in'],
        timeout: 3000,
        type: 'danger'
      });
      this.myRoute.navigate(["/login"]);
      return false;
    }
  }
}
