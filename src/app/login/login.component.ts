import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username = ["usr1", "usr2", "usr3"];
  password = ["pass1", "pass2", "pass3"];

  givenUser:string = "";
  givenPass:string = "";

  constructor() {

  };

  login() {
    var user = this.username.indexOf(this.givenUser)
    if (user != -1){
      if (this.password.indexOf(this.givenPass) === user){
        alert("/src/app/account/"+this.username[user]+".html");
      } else {
        alert("Password Incorrect");
      }
    } else {
      if (this.givenUser != "") {
        alert("Incorrect Username");
      } else {
        alert("Please Enter Username");
      }
    }
  };

  ngOnInit() { };

}
