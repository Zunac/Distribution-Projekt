import {Component, EventEmitter, OnInit} from '@angular/core';
import {CompanyService} from "../services/company.service";
import {Company} from "../app.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {



  companies;
  companyname: string;

  setCompanyname(name: string){
    this.companyname = name;
  }

  constructor(private compService: CompanyService, private router: Router) {

  }

  ngOnInit() {
    this.compService.getCompanyList().subscribe((data: Company[]) => {
      this.companies = data;
    });
    this.compService.setCompanyname(this.companyname);

  }

  goCompany(name){
    this.router.navigate(['/reviews'], { queryParams: {name: name}})
  }





}




