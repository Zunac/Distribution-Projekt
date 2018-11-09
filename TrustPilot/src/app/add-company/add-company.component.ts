import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../DBServices/company.service";
import {Company} from "../app.model";
import {Router} from "@angular/router";

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

  constructor(private compService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.comp.address = this.compAdd;
    this.comp.country = this.countrySelect;
    this.comp.name = this.companyName;
    this.comp.email = this.companyMailAddress;
    this.comp.description = this.companyDesc;

    this.compService.addCompany(this.comp);
    console.log("company added");
    this.router.navigate(['/'])
  }

}
