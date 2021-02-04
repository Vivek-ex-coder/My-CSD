import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user.model';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  allUser!:User[];
  constructor(private signupService:SignupService){}

  ngOnInit(){
    this.getLatestUser();
  }

  addUser(formObj: User){
    console.log(formObj)

    this.signupService.createUser(formObj).subscribe((response)=> {
      alert("User added successfully");
      this.getLatestUser();
    });
} 
  getLatestUser() {
    this.signupService.getAllUser().subscribe((response)=>{
      this.allUser = response
      console.log("User has been Added")
    })
  }
}
