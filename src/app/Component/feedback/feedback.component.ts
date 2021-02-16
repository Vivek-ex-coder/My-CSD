import { Component, OnInit, ViewChild }  from '@angular/core';
import { Feedback } from 'src/app/Model/feedback.model';
import { SignupService } from 'src/app/Service/signup.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  alert:boolean=false;
  @ViewChild('myFeedback') form: any;

  feedback = new Feedback();
  allFeedback!: Feedback[];


  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
    this.getLatestUser();
  }

  addFeedback(formObj: any){
    console.log(formObj);
    this.signupService.createFeedback(formObj).subscribe((response)=> {
      if (this.form.valid) {
        this.form.reset();
      }
      this.getLatestUser();
      this.alert=true;
    });
    
} 
 
  getLatestUser() {
      this.signupService.getAllFeedback().subscribe((response)=>{
        this.allFeedback = response;
        console.log(this.allFeedback);
      })
    }
}