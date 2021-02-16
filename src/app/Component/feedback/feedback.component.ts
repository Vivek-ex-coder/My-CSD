import { Component, OnInit, ViewChild }  from '@angular/core';
import { Feedback } from 'src/app/Model/feedback.model';
import { SignupService } from 'src/app/Service/signup.service';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  @ViewChild('myfeedback') form: any;

  allFeedback!: Feedback[];


  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
    this.getLatestUser();
  }





  addFeedback(formObj: any){
    console.log(formObj);
    this.signupService.createFeedback(formObj).subscribe((response)=> {
    this.getLatestUser();
    
  }) 
  alert("Submitted Successfully");
  // formObj.reset();
  // document.feedbackForm.reset();
  
 
  }
  getLatestUser() {
      this.signupService.getAllFeedback().subscribe((response)=>{
        this.allFeedback = response;
        console.log(this.allFeedback);
      })
    }
}