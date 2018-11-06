import {Company} from "../company-list/company-list.component";

export interface AddCompanyInterface {
  company: Company;

  addCompanyToDB(): boolean;
  passWordExistCheck(): boolean;
  companyExistCheck(): boolean;
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

  addCompanyToDB(): boolean {
    return true;
  }

  companyExistCheck(): boolean {
    return false;
  }

  passWordExistCheck(): boolean {
    return false;
  }

}
