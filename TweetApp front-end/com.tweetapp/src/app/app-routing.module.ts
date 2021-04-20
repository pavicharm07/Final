import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { TweetComponent } from './tweet/tweet.component';
import { TwitterMentionsComponent } from './twitter-mentions/twitter-mentions.component';
import { TwittertimelineComponent } from './twittertimeline/twittertimeline.component';

const routes: Routes = [
  {path:'loginsuccess',component:ProfileComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'tweet',component:TweetComponent},
  {path:'twitter',component:TwittertimelineComponent},
  {path:'mentions',component:TwitterMentionsComponent},
  {path:'forgot',component:ForgotpasswordComponent},
  {path:'password',component:PasswordComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
