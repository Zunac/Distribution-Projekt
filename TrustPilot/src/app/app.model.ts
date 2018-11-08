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
  username?: string;
  companyname?: string;
  review?: string;
  title?: string;
  rating?: string;
}

