import {Component, EventEmitter, OnInit} from '@angular/core';
import {CompanyService} from "../DBServices/company.service";
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

  constructor(private compService2: CompanyService, private router: Router) {

  }

  ngOnInit() {
    this.companies = this.compService2.getCompanyList();
    this.compService2.setCompanyname(this.companyname);

  }

  goCompany(name){
    this.router.navigate(['/reviews'], { queryParams: {name: name}})
  }





}




