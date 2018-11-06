import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  pwValue: String;
  mailAddress: String;
  repeatPW: String;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(user){
    if(user.pW != user.pWRepeat){
      document.getElementById('wrongInput').innerText = "Password does not match.";
      this.pwValue = null;
      this.repeatPW = null;
    }
  }

}
