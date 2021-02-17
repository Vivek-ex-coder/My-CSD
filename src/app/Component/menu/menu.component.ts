import { Component, OnInit } from '@angular/core';
import { DisplayName } from 'src/app/Model/display-name.model';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navigate: any;
  displayName!: DisplayName;
  constructor(private userService:SignupService) { 

  }

  ngOnInit(): void {
    
    this.userService.loggedUser().subscribe(data =>{
      this.displayName = data;
            });
    }

}
