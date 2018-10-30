import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input() public company_name: string;
  @Input() public rating: string;
  @Output() public list_company_name = new EventEmitter<string>();
  @Output() public list_rating = new EventEmitter<string>();





  public companies = [
    {company_name: 'EA', rating: '1'},
    {company_name: 'MBRose', rating: '5'}
  ];


  public addCompany(company_name: string, rating: string) {
    this.companies.push(new Company(company_name, rating));
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
