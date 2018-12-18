import { Injectable } from '@angular/core';
import {Company} from "../app.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";


@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  name: string;
  api: any = 'http://localhost:4000/api/company/';

  constructor(private http: HttpClient,
              private auth:AuthService) {
  }


  addCompany(company): any{
    let headers = new HttpHeaders();
    let token = this.auth.loadToken();
    headers = headers.append('Authorization', 'Bearer ' + token);
    headers = headers.append('Content-Type','application/json');
    return this.http.post(this.api + 'addcompany', company,{headers: headers});
  }

  getCompany(companyName: String){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    this.http.get(this.api + 'companybyname/' + companyName,{headers: headers})
      .subscribe((data) => {
        let company: Company = data['0'];
        return company;
      })
    return null;
  }


  getCompanyList(){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get(this.api + 'companies',{headers: headers});
   }


  setCompanyname(name: string){
    this.name = name;
  }


}
