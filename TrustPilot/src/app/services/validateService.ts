import {Injectable} from "@angular/core";
import {Company, Review} from "../app.model";

@Injectable()
export class ValidateService {

  constructor(){

  }

  validateRegister(user){
    if(user.name == "" ||
      user.email == "" ||
      user.username == "" ||
      user.password == "")
    {
      return false
    } else {
      return true
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateReview(review){
    if(review.companyname == "" ||
      review.title == "" ||
      review.rating == "" ||
      Number(review.rating) < 0 ||
      Number(review.rating) > 5){
      return false;
    } else {
      return true;
    }
  }

  validateCompany(company){
    if(company.name == "" || company.email == "" || company.address == ""){
      return false;
    } else {
      return true;
    }
  }
}
