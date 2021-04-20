import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetComponent } from './tweet/tweet.component';
import { TwitterMentionsComponent } from './twitter-mentions/twitter-mentions.component';
import { TwittertimelineComponent } from './twittertimeline/twittertimeline.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PasswordComponent } from './password/password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    ProfileComponent,
    TweetComponent,
    TwittertimelineComponent,
    TwitterMentionsComponent,
    ForgotpasswordComponent,
    PasswordComponent,

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule
   
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule {}
