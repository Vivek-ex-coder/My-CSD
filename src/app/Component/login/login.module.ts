import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"; 

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule,
    CommonModule,
    RouterModule,
    LoginRoutingModule
  ],
  exports: [RouterModule]
})

export class LoginModule { }
