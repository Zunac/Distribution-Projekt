export interface Company{
  id?: string;
  description: string;
  name: string;
  email: string;
  country: string;
  address: string;
  rating?: number;
}

export interface Review{
  _id?: string;
  title?: string;
  username?: string;
  companyname?: string;
  rating?: string;
  review?: string;
}

export interface UserInfo {
  uid?: string;
  name: string;
  username: string;
  email: string;
  password: string;
}
