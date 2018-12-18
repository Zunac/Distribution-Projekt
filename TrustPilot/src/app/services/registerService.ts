import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  api: any = 'http://localhost:4000/api/authentication/';

  constructor(private http: HttpClient) {
  }


  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(this.api + 'register', user, {headers: headers});
  }






}
