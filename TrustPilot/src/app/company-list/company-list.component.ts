import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatabaseService} from "../DBServices/database.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input() public company_name: string;
  @Input() public rating: string;
  //db: DatabaseConnection;





  companies : Company[];




  addCompany() {
    this.companies.push(new Company(this.company_name, this.rating));

  }

  /*showCompanies(){
    this.dbs.getCompanies().subscribe(companies => {
      this.companies = companies;
    })
    console.log(this.companies + "Hello world");
  }
*/


  constructor(private dbs: DatabaseService) { }

  ngOnInit() {
    this.dbs.getCompanies().subscribe(companies => {
      this.companies = companies;
      console.log(companies.toString() + "  <==Database data bro");

    })
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


