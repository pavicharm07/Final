import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  user=new User();
  message='';
  constructor(private service : RegistrationService, private route : Router) { }

  ngOnInit(): void {
  }
  password(){
this.service.forgotpassword(this.user).subscribe(
  data=>{
     this.route.navigate(['/profile'])
      console.log("response received");
},
  error=> 
  {
    console.log("exception occured");
    this.message="Bad details"
  })
}
}
