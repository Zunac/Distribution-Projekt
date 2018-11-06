import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../DBServices/company.service";
import {Company} from "../app.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  pwValue: String;
  mailAddress: String;
  repeatPW: String;

  company: Company = {
    name: '',
    description: '',
    rating: 0
  }

  constructor(private dbService: CompanyService) {
  }

  ngOnInit() {
  }

  onSubmit(user){
    if(user.pW != user.pWRepeat){
      document.getElementById('wrongInput').innerText = "Password does not match.";
      this.pwValue = null;
      this.repeatPW = null;
    }

    //this.company.name = this.mailAddress.valueOf();
    //this.company.description = this.pwValue.valueOf();
    this.company.rating = 1;

    //this.dbService.addCompany(this.company);


    this.dbService.getCompanyList().forEach((comp: Company) => {
          console.log(comp.name);
      }
    )

  }

}

