import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complain } from '../Model/complain.model';
import { DisplayName } from '../Model/display-name.model';
import { Feedback } from '../Model/feedback.model';
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

  // For Compalin Section

  createComplain(complain: Complain){
    return this._http.post("http://localhost:3000/complain", complain);
  }
  getAllComplain(){
    return this._http.get<Complain[]>("http://localhost:3000/complain");
  }

  getComplainById(id:string){
    return this._http.get(`http://localhost:3000/complain/${id}`);
  }

  

  // For Feedback Section
  
  createFeedback(feedback: Feedback){
    return this._http.post("http://localhost:3000/feedback", feedback);
  }
  getAllFeedback(){
    return this._http.get<Feedback[]>("http://localhost:3000/feedback");
  }
  getFeedbackById(id:string){
    return this._http.get(`http://localhost:3000/feedback/${id}`);
  }

// For displayName

  updateName( name:DisplayName){
    return this._http.put(`http://localhost:3000/displayName/${name.id}`,name);
  }

  loggedUser(){
    return this._http.get<DisplayName>("http://localhost:3000/displayName");
  }

}
