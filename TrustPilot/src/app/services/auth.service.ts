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
    console.log('hello');
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
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  isLoggedIn(){
    const jwt = new JwtHelperService();
    this.loadToken();
    if(this.authToken == null){
      return false;
    }
    const isExpired = jwt.isTokenExpired(this.authToken);
    if(isExpired){
      this.logout();
      return false;
    }
     return true;
  }


}

