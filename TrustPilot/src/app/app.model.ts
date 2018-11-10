export interface Company{
  id?: string;
  description: string;
  name: string;
  email: string;
  country: string;
  address: string;
  rating?: number;
}

export interface UserInfo {
  uid?: string;
  fore_name: string;
  last_name: string;
  country: string;
  address: string;
  user_type: string;
}
