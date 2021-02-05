import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/app/Model/complain.model';
import { Feedback } from 'src/app/Model/feedback.model';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  complains!: Complain[];
  feedbacks!: Feedback[];
  constructor(private userService : SignupService) { }

  ngOnInit(): void {
   this.userService.getAllComplain().subscribe(data =>{
     this.complains = data;
   });

   this.userService.getAllFeedback().subscribe(data =>{
    this.feedbacks = data;
  });
  }

}
