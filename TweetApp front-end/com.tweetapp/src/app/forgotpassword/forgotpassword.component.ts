import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  user=new User();
 message='';
  constructor(private service : RegistrationService, private route : Router){ }
  
ngOnInit() {
  }


  Birthday(){
this.service.loginUserFromremote(this.user).subscribe(
  data=>{
    if(data==null){
      alert("Please enter dob");
    }
     this.route.navigate(['/password'])
      console.log("response received");
},
  error=> 
  {
    console.log("exception occured");
    this.message="Bad credentials,Please Enter valid emailId and password"
  }

)
}
}

