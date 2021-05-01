import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';
import { TweethomeComponent } from './tweethome/tweethome.component';

const routes: Routes = [
  { path: '', component: UserloginComponent },
  { path: 'user/registration', component: UserRegistrationComponent },
  {
    path: 'password/reset',
    component: ForgotPasswordComponent
  },
  { path: 'user/logout', component: LogoutComponent},
  {
    path: 'home',
    component: TweethomeComponent
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
