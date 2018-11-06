import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from "../models/Company";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input() public company_name: string;
  @Input() public rating: string;

  companies : Company[];

  constructor() { }

  ngOnInit() {

  }

  input = '';

  onKey(event: KeyboardEvent, type: string) { // without type info
    this.input += (<HTMLInputElement>event.target).value;
    if(type = 'name'){

    }
    if(type = 'rating'){

    }
    this.input = '';
  }

}




