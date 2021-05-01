import { Component,} from '@angular/core';
import { ForgotPasswordModel } from '../model/user.forgotpassword';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  {

  constructor(private http: HttpClient, private router: Router) {}
    user = new ForgotPasswordModel();

    show:boolean = false;
    status:string;
  resetPassword(){

    this.status = "Loading..."
    this.show=false;
    

    if(this.user.password == null || this.user.newPassword == null || this.user.confirmPassword ==null)
    {
       this.status = "fields cannot be empty"
       this.show = true;
    }
    else if(this.user.newPassword != this.user.confirmPassword){
      this.show = true;
      document.getElementById("newpassword").style.borderColor="red";
      document.getElementById("confirmpassword").style.borderColor="red";
      this.status = "The new password and confirm password must be same";
      
    }
    else{
    let httpOptions = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(httpOptions), 
    };
    
    this.http.post(`http://localhost:8080/api/v1.0/tweets/${ this.user.user}/forgot`,{"user": this.user.user,"email": localStorage.getItem("email"), "currentPassword":this.user.password, "newPassword": this.user.newPassword},requestOptions).subscribe((res: any) => {
       this.router.navigateByUrl("/user/home");
    })
    
  }
  }
}
