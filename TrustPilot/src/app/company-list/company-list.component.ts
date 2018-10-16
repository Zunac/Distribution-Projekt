import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

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
