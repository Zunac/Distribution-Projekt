import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  company: Company;
  public companies = [
    {name: 'EA', rating: '1'},
    {name: 'MBRose', rating: '5'}
  ];


  public addCompany(company: {name: string; rating: string}) {
    this.companies.push(company);
  }

  constructor() { }

  ngOnInit() {
  }

}

export class Company{
  public company_name: string;
  public rating: string;

  constructor(company_name: string, rating: string)
  {
    this.company_name = company_name;
    this.rating = rating;
  }
}
