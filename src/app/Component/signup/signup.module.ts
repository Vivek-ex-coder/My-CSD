import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"; 
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';



@NgModule({
  declarations: [SignupComponent],
  imports: [FormsModule,
    CommonModule,
    RouterModule,
    SignupRoutingModule
  ],
  exports: [RouterModule]
})

export class SignupModule { }
