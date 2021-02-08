import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/app/Model/complain.model';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  allComplain!: Complain[];

  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
    this.getLatestUser();
  }

  addComplain(formObj: any){
    console.log(formObj);
    this.signupService.createComplain(formObj).subscribe((response)=> {
    this.getLatestUser();
  });
  alert("Complain Registered");
  formObj.reset();
}

  getLatestUser() {
      this.signupService.getAllComplain().subscribe((response)=>{
        this.allComplain = response;
        console.log(this.allComplain);
      })
    }
}
