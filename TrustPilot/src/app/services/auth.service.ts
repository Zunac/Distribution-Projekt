import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthService {

  api: any = 'http://localhost:4000/api/authentication/';
  authToken: any;
  user: any;

  constructor(private router: Router,
              private http: HttpClient) {

  }

  authenticate(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(this.api + 'authenticate', user ,{headers: headers});
  }

  storeData(user, token){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = undefined;
    this.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  loadToken(){
    const jwt = new JwtHelperService();
    if(localStorage.getItem('id_token') != undefined) {
      const token = localStorage.getItem('id_token');
      const isExpired = jwt.isTokenExpired(token);
      if (isExpired) {
        this.logout();
        return this.authToken = undefined;
      } else {
        return this.authToken = token;
      }
    } else {
      return this.authToken;
    }
  }

  isLoggedIn(){
    this.loadToken();
    if(this.authToken == undefined){
      return false;
    }
    return true;
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user != undefined) {
      return this.user.username;
    } else {
      return undefined;
    }
  }


}

