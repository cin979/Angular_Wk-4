import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../data/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  givenUser:string;
  givenPass:string;

  constructor(private router:Router) { };

  login() {
    var userList = data.users;
    var user = -1;
    for (var i=0; i < userList.length; i++){
      if (userList[i].username === this.givenUser){
        user = i;
      }
    }
    if (user != -1){
      if (userList[user].password === this.givenPass){
        this.router.navigateByUrl('/account');
      } else {
        console.log("badPass for " + userList[user].username);
        return "badPass";
      }
    } else {
      console.log("badUsr");
      return "badUsr";
    }
  };

  ngOnInit() { };

}
