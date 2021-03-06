import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/login/login.component';
import { HomepageComponent } from './components/main-master/homepage/homepage.component';
import { UserAuthenticationGuard } from './guards/auth/user-authentication.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'',component:HomepageComponent ,canActivate:[UserAuthenticationGuard]},
  {path:'login',component:LogInComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
