import { Injectable } from '@angular/core';
import {Review} from "../app.model";
import { AuthService} from "./auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  api: any = 'http://localhost:4000/api/review/';

  constructor(private http: HttpClient,
              private auth: AuthService) {
  }


  addReview(review){
    let headers = new HttpHeaders();
    let token = this.auth.loadToken();
    headers = headers.append('Content-Type','application/json');
    headers = headers.append('Authorization', 'Bearer ' + token);
    return this.http.post(this.api + 'addreview', review,{headers: headers});
  }

  getUserReviews(username: String) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.auth.loadToken());
    return this.http.get(this.api + 'getuserreview/' + username, {headers: headers});
  }


  getReviews(company: String){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.auth.loadToken());
    return this.http.get(this.api + 'getcompanyreview/' + company,{headers: headers});
  }


}
