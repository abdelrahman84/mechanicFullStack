import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user'
import { Router } from '@angular/router';
import { JwtAPIService } from 'src/app/_services/jwt-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   private user: User = new User();

   public error = null;

  constructor(private jwtAPI:JwtAPIService) { }

  ngOnInit() {
  }

  onSubmit(){
     console.log(this.user);
     this.jwtAPI.signin(this.user).subscribe(
       data => console.log(data),
       error =>this.handleError(error)

     );
  }

  handleError(error){
    this.error=error.error.error;
    
  }

}
