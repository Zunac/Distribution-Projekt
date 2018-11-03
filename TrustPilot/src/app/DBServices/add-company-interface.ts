import {Company} from "../company-list/company-list.component";

export interface AddCompanyInterface {
  company: Company;

  addCompanyToDB();
}

export class AddCompany implements AddCompanyInterface{
  private _company: Company;

  constructor(company: Company) {
    this._company = company;
  }

  get company(): Company {
    return this._company;
  }

  set company(value: Company) {
    this._company = value;
  }

  addCompanyToDB() {
  }

}
