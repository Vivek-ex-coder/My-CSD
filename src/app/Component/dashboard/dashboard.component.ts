import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/app/Model/complain.model';
import { Feedback } from 'src/app/Model/feedback.model';
import { User } from 'src/app/Model/user.model';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users!: User[];
  complains!: Complain[];
  feedbacks!: Feedback[];
  comp!:boolean;
  feed!:boolean;
  use!:boolean;

  constructor(private userService : SignupService) { }

  ngOnInit(): void {
   this.userService.getAllComplain().subscribe(data =>{
     this.complains = data;
   });

   this.userService.getAllFeedback().subscribe(data =>{
    this.feedbacks = data;
  });

  this.userService.getAllUser().subscribe(data  =>{
    this.users =data;
  });
  }

  checkBoxcomp(){
    this.use=false;
    this.feed = false;
    this.comp=true;

  }

  checkBoxfeed(){
    this.use=false;
    this.comp=false;
    this.feed = true;

  }

  checkBoxUse(){
    
    this.comp=false;
    this.feed = false;
    this.use=true;

  }
}
