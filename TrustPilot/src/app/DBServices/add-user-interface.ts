import {PrivateUser} from "../Shared/PrivateUser";


export interface AddUserInterface {
  user: PrivateUser;

  addUserToDatabase(): boolean;
  passWordExistCheck(): boolean;
  userExistCheck(): boolean;
  emailExistCheck(): boolean;
}

export class AddUser implements AddUserInterface {

  private _user: PrivateUser;


  constructor(user: PrivateUser) {
    this._user = user;
  }

  get user(): PrivateUser {
    return this._user;
  }

  set user(value: PrivateUser) {
    this._user = value;
  }

  addUserToDatabase(): boolean {
    return false;
  };

  emailExistCheck(): boolean {
    return false;
  }

  passWordExistCheck(): boolean {
    return false;
  }

  userExistCheck(): boolean {
    return false;
  }



}
