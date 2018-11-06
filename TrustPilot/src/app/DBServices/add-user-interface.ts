


export interface AddUserInterface {

  addUserToDatabase(): boolean;
  passWordExistCheck(password): boolean;
  emailExistCheck(email): boolean;
}

export class AddUser implements AddUserInterface {



  constructor() {
  }



  addUserToDatabase(): boolean {
    return false;
  };

  emailExistCheck(email): boolean {
    return false;
  }

  passWordExistCheck(password): boolean {
    return false;
  }



}
