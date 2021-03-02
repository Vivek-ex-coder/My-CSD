import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"; 
import { RouterModule } from '@angular/router';

import { ComplainComponent } from './complain.component';
import { ComplainRoutingModule } from './complain-routing.module';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [ComplainComponent],
  imports: [FormsModule,
    CommonModule,
    RouterModule,
    ComplainRoutingModule,
    MenuModule
  ],
  exports: [RouterModule]
})

export class ComplainModule { }
