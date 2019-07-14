import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user'
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private user: User = new User();

 

  private error = null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  handleError(error){
    this.error=error.error.error;
    console.log(this.error);
  }

  onSubmit(){
    console.log(this.user);
     return this.http.post('http://localhost:8000/api/signup',this.user).subscribe(
       data => console.log(data),
       error =>this.handleError(error)

     );
  }

}
