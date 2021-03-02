import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"; 
import { RouterModule } from '@angular/router';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [FeedbackComponent],
  imports: [FormsModule,
    CommonModule,
    RouterModule,
    FeedbackRoutingModule,
    MenuModule
  ],
  exports: [RouterModule]
})
export class FeedbackModule { }


