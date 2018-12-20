import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../services/company.service";
import {Company} from "../app.model";
import {Router} from "@angular/router";
import { NgFlashMessageService } from "ng-flash-messages";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  companyName: string;
  companyDesc: string;
  companyMailAddress: string;
  countrySelect: string;
  compAdd: string;

  comp: Company = {
    name: "",
    description: "",
    email: "",
    country: "",
    address: ""
  }

  constructor(private compService: CompanyService,
              private router: Router,
              private flash: NgFlashMessageService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.comp.address = this.compAdd;
    this.comp.country = this.countrySelect;
    this.comp.name = this.companyName;
    this.comp.email = this.companyMailAddress;
    this.comp.description = this.companyDesc;

    this.compService.addCompany(this.comp).subscribe((data) => {
      if(data['success']){
        this.flash.showFlashMessage({
          messages: ['Company added!'],
          timeout: 3000,
          type: 'success'
        });
        this.router.navigate(['/'])
      } else {
        this.flash.showFlashMessage({
          messages: ['Service unavailable at the moment, please try again later!'],
          timeout: 3000,
          type: 'danger'
        });
      };
    });


  }

}
