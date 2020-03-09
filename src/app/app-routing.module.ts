import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{SignupComponent} from './signup/signup.component'
import { from } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthguardServiceService]},
  {path: 'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
