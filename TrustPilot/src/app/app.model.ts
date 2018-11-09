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

/*
  username?: string;
  companyname?: string;
  review?: string;
  title?: string;
  rating?: string;

 */

/*
<ul >
  <li *ngFor="let review of reviews">
    <b>Title:</b>  {{review.title}}
    <p></p>
    <b>User name:</b>  {{review.username}}
    <p></p>
    <b>Company Name:</b>  {{review.companyname}}
    <p></p>
    <b>Rating:</b> {{review.rating}}
    <p></p>
    <b>Description:</b>  {{review.review}}
    <p></p>
  </li>
</ul>
 */
