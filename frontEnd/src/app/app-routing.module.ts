import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component'
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResestComponent } from './components/password/request-resest/request-resest.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  }, 
  {path: 'signup', component: SignupComponent},
  { path: 'profile', component: ProfileComponent},
  {path:'request-password-reset', component: RequestResestComponent},
  {path:'response-password-reset', component: ResponseResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
