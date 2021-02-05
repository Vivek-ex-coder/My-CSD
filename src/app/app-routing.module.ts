import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplainComponent } from './Component/complain/complain.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { MenuComponent } from './Component/menu/menu.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  {
    path:'home',component: HomeComponent
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path:'menu',component: MenuComponent
  },
  {
    path:'feedback',component: FeedbackComponent
  },
  // {
  //   path:'service',component:ServiceComponent
  // },
  {
    path:'complain',component:ComplainComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'**',component:LoginComponent
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
