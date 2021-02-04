import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http:HttpClient) { }
  
  createUser(user: User){
    return this._http.post("http://localhost:3000/users", user);
  }
  getAllUser(){
    return this._http.get<User[]>("http://localhost:3000/users");
  }
  getUserById(Id:string){
    return this._http.get<User>(`http://localhost:3000/users/${Id}`);
  }
}
