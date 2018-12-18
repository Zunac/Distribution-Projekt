import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { NgFlashMessageService } from "ng-flash-messages";


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  authService: any;

  constructor(private auth: AuthService,
              private router: Router,
              private flash: NgFlashMessageService) {
    this.authService = auth;
  }

  ngOnInit() {
  }

  onLogoutClick(){
    this.auth.logout();
    this.flash.showFlashMessage({
      messages: ['Logged out'],
      timeout: 3000,
      type: 'success'
    });
    this.router.navigate(['/']);
    return false;
  }
}
