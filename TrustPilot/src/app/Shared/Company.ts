export class Company{
  private _address: string;
  private _companyName: string;
  private _contactMail: string;
  private _contactPhone: string;
  private _description: string;
  private _picture: ImageBitmap;
  private _websiteLink: string;

  constructor(companyName: string, contactMail: string, websiteLink: string){
    this._companyName = companyName;
    this._contactMail = contactMail;
    this._websiteLink = websiteLink;
  }


  get address(): string {
    return this._address;
  }

  get companyName(): string {
    return this._companyName;
  }

  get contactMail(): string {
    return this._contactMail;
  }

  get contactPhone(): string {
    return this._contactPhone;
  }

  get description(): string {
    return this._description;
  }

  get picture(): ImageBitmap {
    return this._picture;
  }

  get websiteLink(): string {
    return this._websiteLink;
  }


  set address(value: string) {
    this._address = value;
  }

  set companyName(value: string) {
    this._companyName = value;
  }

  set contactMail(value: string) {
    this._contactMail = value;
  }

  set contactPhone(value: string) {
    this._contactPhone = value;
  }

  set description(value: string) {
    this._description = value;
  }

  set picture(value: ImageBitmap) {
    this._picture = value;
  }

  set websiteLink(value: string) {
    this._websiteLink = value;
  }
}
