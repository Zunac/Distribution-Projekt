import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input() public company_name: string;
  @Input() public rating: string;






  public companies = [
    {company_name: 'EA', rating: '1'},
    {company_name: 'MBRose', rating: '5'}
  ];


  addCompany() {
    this.companies.push(new Company(this.company_name, this.rating));
  }

  constructor() { }

  ngOnInit() {
  }

  input = '';

  onKey(event: KeyboardEvent, type: string) { // without type info
    this.input += (<HTMLInputElement>event.target).value;
    if(type = 'name'){
      this.company_name = this.input;

    }
    if(type = 'rating'){
      this.rating= this.input;

    }
    this.input = '';




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
