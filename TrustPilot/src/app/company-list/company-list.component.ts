import {Component, EventEmitter, OnInit} from '@angular/core';
import {CompanyService} from "../DBServices/company.service";
import {Company} from "../app.model";
import {Review} from "../app.model";


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {



  companies: Company[];
  companyname: string;

  setCompanyname(name: string){
    console.log("hello there"+ name);
    this.companyname = name;
  }

  constructor(private compService2: CompanyService) {

  }

  ngOnInit() {
    this.companies = this.compService2.getCompanyList();
    console.log("Company name transferred");
    this.compService2.setCompanyname(this.companyname);

  }





}




