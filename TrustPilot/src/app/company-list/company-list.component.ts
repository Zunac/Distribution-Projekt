import {Component, EventEmitter, OnInit} from '@angular/core';
import {CompanyService} from "../services/company.service";
import {Company} from "../app.model";
import {Router} from "@angular/router";
import {NgFlashMessageService} from "ng-flash-messages";


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

  constructor(private compService: CompanyService, private router: Router, private flash: NgFlashMessageService) {

  }

  ngOnInit() {
    this.compService.getCompanyList().subscribe((data: Company[]) => {
      this.companies = data;
      console.log(this.companies.isEmpty);
      if(this.companies.isEmpty){
        this.flash.showFlashMessage({
          messages: ['No companies listed at the moment!'],
          timeout: 3000,
          type: 'danger'
        });
      }
    }, error => {
      this.flash.showFlashMessage({
        messages: ['Service currently unavailable, please try again later!'],
        timeout: 3000,
        type: 'danger'
      });
    });
    this.compService.setCompanyname(this.companyname);

  }

  goCompany(name){
    this.router.navigate(['/reviews'], { queryParams: {name: name}})
  }





}




