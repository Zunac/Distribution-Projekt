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
  name?: string;
  review?: string;
  title?: string;
  rating?: number;
}

