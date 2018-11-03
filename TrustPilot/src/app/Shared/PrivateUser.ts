export class PrivateUser{
  private _firstName: string;
  private _lastName: string;
  private _mail: string;
  private _age: number;
  private _passWord: string;
  private _town: string;
  private _zip: number;


  constructor(firstName: string, mail: string, passWord: string) {
    this._firstName = firstName;
    this._mail = mail;
    this._passWord = passWord;
  }


  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get passWord(): string {
    return this._passWord;
  }

  set passWord(value: string) {
    this._passWord = value;
  }

  get town(): string {
    return this._town;
  }

  set town(value: string) {
    this._town = value;
  }

  get zip(): number {
    return this._zip;
  }

  set zip(value: number) {
    this._zip = value;
  }
}
