import {Component, EventEmitter, OnInit} from '@angular/core';
import {CompanyService} from "../DBServices/company.service";

//Node companyservice:
import {Company_N_Service} from "../NodeServices/company_-n_.service";

import {Company} from "../app.model";
import {Review} from "../app.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {



  companies: Company[];
  companyname: string;

  setCompanyname(name: string){
    this.companyname = name;
  }

  constructor(private comp_n_service: Company_N_Service, private router: Router, private compService2: CompanyService) {

  }

  ngOnInit() {
    this.companies = this.comp_n_service.getCompanies();
    this.compService2.setCompanyname(this.companyname);

  }

  goCompany(name){
    this.router.navigate(['/reviews'], { queryParams: {name: name}})
  }





}




