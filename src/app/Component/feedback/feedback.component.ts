import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/Model/feedback.model';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  allFeedback!: Feedback[];


  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
    this.getLatestUser();
  }





  addFeedback(formObj: any){
    console.log(formObj);
    this.signupService.createFeedback(formObj).subscribe((response)=> {
    this.getLatestUser();
  }) 
 
  }
  getLatestUser() {
      this.signupService.getAllFeedback().subscribe((response)=>{
        this.allFeedback = response;
        console.log(this.allFeedback);
      })
    }
}