import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-manager',
  templateUrl: './rating-manager.component.html',
  styleUrls: ['./rating-manager.component.css']
})
export class RatingManagerComponent implements OnInit {
  @Input() public rating: string = '';



  onKey(event: any){
    this.rating += event.target.value();
  }




  constructor() { }

  ngOnInit() {
  }

}
