import {Component, Input, OnInit, Output} from '@angular/core';




@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})


export class AddReviewComponent implements OnInit {
  @Input() public userid: string;
  @Input() public title: string;
  @Input() public review: string;
  @Input() public company: string;
  @Input() public stars: string;



  addReview() {
    this.reviews.push(new Review(this.userid, this.title, this.review, this.company, this.stars));

  }

  public reviews = [
    {}
  ];

  constructor() {


  }

  ngOnInit() {
    console.log('hello');
  }

  companies = [
    {name: 'EAGames'}
  ]


  input = ''

  onKey(event: KeyboardEvent, type: string) { // without type info
    this.input += (<HTMLInputElement>event.target).value;

      this.userid = 'none'

    if(type = 'title'){
      this.title= this.input;
    }
    if(type = 'review'){
      this.review= this.input;
    }
    if(type = 'company'){
      this.company= this.input;
    }
    if(type = 'stars'){
      this.stars= this.input;
    }
  }

}

export class Review{
  public userid: string;
  public title: string;
  public review: string;
  public company: string;
  public stars: string;

  constructor(userid: string, title: string, review: string, company: string, stars: string)
  {
    this.userid = userid;
    this.title = title;
    this.review = review;
    this.company = company;
    this.stars = stars;
  }
}
