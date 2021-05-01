import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginService } from './service/login.service';
import { TweethomeComponent } from './tweethome/tweethome.component';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserloginComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    TweethomeComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
     
  ],
  providers: [LoginService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
