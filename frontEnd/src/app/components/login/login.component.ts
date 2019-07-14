import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../../_models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   private user: User = new User();

   public error = null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
     console.log(this.user);
     return this.http.post('http://localhost:8000/api/login',this.user).subscribe(
       data => console.log(data),
       error =>this.handleError(error)

     );
  }

  handleError(error){
    this.error=error.error.error;
    
  }

}
