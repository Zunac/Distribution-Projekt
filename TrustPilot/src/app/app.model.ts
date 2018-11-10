export interface Company{
  id?: string;
  description: string;
  name: string;
  email: string;
  country: string;
  address: string;
  rating?: number;
}

<<<<<<< HEAD

export interface Review{
  title?: string;
  username?: string;
  companyname?: string;
  rating?: string;
  review?: string;
}


=======
export interface UserInfo {
  uid?: string;
  fore_name: string;
  last_name: string;
  country: string;
  address: string;
  user_type: string;
}
>>>>>>> LoginTesting
