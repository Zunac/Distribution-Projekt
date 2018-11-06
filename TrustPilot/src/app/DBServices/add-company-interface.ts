import {Company} from "../models/Company";
import {DatabaseService} from "./database.service";

export interface AddCompanyInterface {
  AddCompany(comp: Company);
}

export class AddComp implements AddCompanyInterface{

  db: DatabaseService;

  constructor(){

  }

  AddCompany(comp: Company): any{
    let result: boolean = this.db.addCompany(comp);
    return result;
  }

}

