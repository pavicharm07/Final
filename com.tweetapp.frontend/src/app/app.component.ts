import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { TweethomeComponent } from './tweethome/tweethome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  flag:boolean = true;
  title = 'Tweet-App';
  constructor(private fb: FormBuilder,private router: Router,location: Location) {
    router.events.subscribe(val => {
      if (location.path() != "" && location.path()!="/user/registration" && location.path()!="/forgot" )  {
       console.log(location.path())
       this.flag = true
      } else {
        console.log('empty')
        this.flag = false
      }
    });

  }

  loginStatus: boolean;
  result: any = [];
  status: boolean = true;


  ngOnInit() {
    if (!!localStorage.getItem('token')) {
      this.loginStatus = true;
    } else this.loginStatus = false;
    
  }

  userLoginStatus() {
    if (!!localStorage.getItem('token')) return true;
    else return false;
  }
}
