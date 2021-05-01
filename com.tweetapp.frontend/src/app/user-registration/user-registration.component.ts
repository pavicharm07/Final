import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { dobValidator, emailValidator } from '../shared/validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService: LoginService
  ) {}

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get dob() {
    return this.registrationForm.get('dob');
  }
  get contactNumber() {
    return this.registrationForm.get('contactNumber');
  }
  get loginId() {
    return this.registrationForm.get('loginId');
  }
  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, emailValidator]],
    dob: ['', [Validators.required, dobValidator]],
    gender: ['', Validators.required],
    contactNumber: ['', Validators.required],
    loginId:['', Validators.required]
  });

  onSubmit() {
    console.log(this.registrationForm.value);

    this.registrationService
      .userRegistration(this.registrationForm.value)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.router.navigateByUrl('/user/login');
        }
      });
  }
}
