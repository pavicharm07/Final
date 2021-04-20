import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user=new User();
 message='';
 public error = false;
 public logout = false;
  constructor(private service : RegistrationService, private route : Router) { }

  ngOnInit() {
  }


  loginUser(){
    this.logout = false;
this.service.loginUserFromremote(this.user).subscribe(
  data=>{
    if(data==null){
      alert("Please enter email Id and password");
    }
     this.route.navigate(['/loginsuccess'])
      console.log("response received");
},
  error=> 
  {
    console.log("exception occured");
    this.message="Bad credentials,Please Enter valid emailId and password"
  }

)
  }
  gotoregisterform(){
    this.route.navigate(['/registration'])
  }
}
