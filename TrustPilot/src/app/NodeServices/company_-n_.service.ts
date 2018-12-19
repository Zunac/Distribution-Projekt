import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../app.model";

@Injectable({
  providedIn: 'root'
})
//The "_N" stands for the company service implemented in Node.js
export class Company_N_Service {

  //The URL for the data hosted on a webserver using Amazon Web Services (Elastic Beanstalk)
  uri = 'http://pilottrusttestget-env.dmbg8vr7xp.eu-central-1.elasticbeanstalk.com';
  list: Observable<Company[]>;
  compList = [];

  constructor(private http: HttpClient) { }

  //Implementing CRUD operations on the 'companies' collection in the database via HTTP requests.
  getCompanies() {

    this.list = this.http.get<Company[]>(`${this.uri}/companies`);


    this.list.subscribe((data: Company[]) => {

      data.forEach((comp: Company) => {

          this.compList.push(comp);

        }
      )
    })

    console.log(this.compList);
    return this.compList;


  }

}

