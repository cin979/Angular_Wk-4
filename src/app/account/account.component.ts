import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  constructor(private router:Router) { };

  acc() {

  };

  logout() {
    if(typeof Storage !== "undefined"){
      if(sessionStorage.getItem("currentUser")){
        sessionStorage.removeItem("currentUser");
        alert("You Have Been Logged Out");
        this.router.navigateByUrl('/login');
      }
    }
  };

  ngOnInit() {
    if(typeof Storage !== "undefined"){
      if(sessionStorage.getItem("currentUser")){
        var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        console.log(currentUser);
        document.getElementById("username").innerHTML =  currentUser.username;
        document.getElementById("username_head").style.display = "inline";
        document.getElementById("birth_day").innerHTML = currentUser.birthDate;
        document.getElementById("birth_day_head").style.display = "inline";
        document.getElementById("age").innerHTML =  currentUser.age;
        document.getElementById("age_head").style.display = "inline";
        document.getElementById("email").innerHTML =  currentUser.email;
        document.getElementById("email_head").style.display = "inline";
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
      }
    } else {
      alert("Please Login First");
      this.router.navigateByUrl('/login');
    }
  };
}
