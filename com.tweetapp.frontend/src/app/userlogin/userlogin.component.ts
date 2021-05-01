import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { emailValidator } from '../shared/validation';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  token: string;
  show: boolean = false;
  status: string;

  loginForm = this.fb.group({
    email: ['', [Validators.required, emailValidator]],
    password: ['', Validators.required],
  });

  onSubmit() {

    console.log(this.loginForm.value);
    
    this.loginService.loginUser(this.loginForm.value).subscribe((res:any)=>{
      
      this.token = res.headers.get('token');
      localStorage.setItem("token", this.token);
      localStorage.setItem("email", this.loginForm.value.email);
      localStorage.setItem("login_id", this.loginForm.value.email);
      this.router.navigateByUrl('/home');
    },(error)=>{
      console.log(error);
alert('Email or password is incorrect')
      if(error.status == 400){
        console.log("Email or password is incorrect");
      }
      if(error.status == 500){
        console.log("Email or password is incorrect");
      }
    })
    
  }
}
