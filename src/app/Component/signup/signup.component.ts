import { Component, OnInit,ViewChild } from '@angular/core';
import { User } from 'src/app/Model/user.model';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();
  allUser!:User[];
  alert:boolean=false;

  @ViewChild('myForm') form:any;
  constructor(private signupService:SignupService){}

  ngOnInit(){
    this.getLatestUser();
  }

  addUser(formObj: User){
    console.log(formObj)
    this.signupService.createUser(formObj).subscribe((response)=> {
        if (this.form.valid) {
        this.form.reset();
      }
      this.getLatestUser();
      this.alert=true;
    });
    
} 
  getLatestUser() {
    this.signupService.getAllUser().subscribe((response)=>{
      this.allUser = response
      console.log("User has been Added")
    })
  }
}
