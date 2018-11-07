import {Component, EventEmitter, OnInit} from '@angular/core';
import {CompanyService} from "../DBServices/company.service";
import {Company} from "../app.model";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor(public compService: CompanyService) {

  }

  ngOnInit() {
    this.companies = this.compService.getCompanyList();
  }


}




