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
  title?: string;
  username?: string;
  companyname?: string;
  rating?: string;
  review?: string;
}


