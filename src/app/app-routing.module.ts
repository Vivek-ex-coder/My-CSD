import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home',loadChildren: () => import('./Component/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'login',loadChildren: () => import('./Component/login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'signup',loadChildren: () => import('./Component/signup/signup.module').then(m => m.SignupModule)
  },
  { 
    path: 'dashboard',loadChildren: () => import('./Component/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { 
    path: 'feedback',loadChildren: () => import('./Component/feedback/feedback.module').then(m => m.FeedbackModule)
  },
  { 
    path: 'complain', loadChildren: () => import('./Component/complain/complain.module').then(m => m.ComplainModule)
  },
  { 
    path: 'menu', loadChildren: () => import('./Component/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path:'**',loadChildren: () => import('./Component/login/login.module').then(m => m.LoginModule)
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
