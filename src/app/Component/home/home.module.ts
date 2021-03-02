import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule,
    RouterModule,
    HomeRoutingModule,
    MenuModule
  ],
  exports: [RouterModule]
})

export class HomeModule { }
