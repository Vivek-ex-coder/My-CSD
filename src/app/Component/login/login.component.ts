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
  
  homeIdToUpdate: any;
 
  flag: boolean = false;
  password:string="";

  constructor(private userService: SignupService, private router: Router) {
    // this.user = new User;
    // this.getUser();
  }

  ngOnInit(): void {
  }

  gotoLogin(goto:User) {
    this.router.navigate(['/home']);
    // if (goto.email !== undefined && goto.email !== null && goto.email.length > 0) 
    // {
        this.userService.getUserById(goto.email).subscribe((response)=>{
          this.user = response
          alert('login called');
          this.router.navigate(['/home']);
          console.log(this.user);
        });
      } 
    //   else {
    //   this.flag = true;
    //   alert("login not called");
    // }
  // }
 
  // getUser() {
  //   this.userService.getAllUsers().subscribe(service => {
  //     this.users = service;
  //   });
  // }

}

