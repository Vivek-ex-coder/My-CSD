import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';
import { SignupService } from 'src/app/Service/signup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  users!: User[];
  homeIdToUpdate: any;
  userName!:string;
  userPassword!:string;
 
  flag: boolean = false;
  password!:string;

  constructor(private userService:SignupService, private router: Router) {
    this.user = new User;
    this.getUser();
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data  =>{
      this.users =data;
    });
  }
  gotoLogin() {
    if (this.user.email !== undefined && this.user.email !== null && this.user.email.length > 0) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].password == this.user.password && this.users[i].email == this.user.email) {
          this.password = this.users[i].password;
        }
      }
      if(this.user.password == this.password){
        alert("LOGIN SUCCESSFUL");
          this.router.navigate(['/home']);
      } else {
        alert("Please enter the correct password or email Id");
      }
    } else {
      this.flag = true;
      alert("login not called");
    }
  }
 
  getUser() {
    this.userService.getAllUser().subscribe(service => {
      this.users = service;
    });
  }

}






















//   gotoLogin() {
//     if (this.user.email !== undefined && this.user.email !== null && this.user.email.length > 0) {
//       for (let i = 0; i < this.users.length; i++) {
//         if (this.users[i].password == this.user.password && this.users[i].email == this.user.email) {
//           this.password = this.users[i].password;
//         }
//       }
//       if(this.user.password == this.password){
//         alert("LOGIN SUCCESSFUL");
//           this.router.navigate(['/home']);
//       } else {
//         alert("Please enter the correct password or email Id");
//       }
//     } else {
//       this.flag = true;
//       alert("login not called");
//     }
//   }
  
//   getUser() {
//     this.userService.getAllUser().subscribe(service => {
//       this.users = service;
//     });
//   }

// }