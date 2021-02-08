import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Component/signup/signup.component';
import { SignupService } from './Service/signup.service';
import { LoginComponent } from './Component/login/login.component';
import { ComplainComponent } from './Component/complain/complain.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { MenuComponent } from './Component/menu/menu.component';
import { HomeComponent } from './Component/home/home.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ComplainComponent,
    FeedbackComponent,
    MenuComponent,
    HomeComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
