import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }//,
  // { path: '', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
