export interface Company{
  description: string;
  name: string;
  rating?: number;
}

export class CompanyImpl implements Company{
  description: string;
  name: string;
  rating: number;


}
