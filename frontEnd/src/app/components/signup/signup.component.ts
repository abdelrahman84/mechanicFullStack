import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user'
import { Router } from '@angular/router';
import { JwtAPIService } from 'src/app/_services/jwt-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private user: User = new User();

 

  private error = null;

  constructor(private jwtAPI: JwtAPIService) { }

  ngOnInit() {
  }

  handleError(error){
    this.error=error.error.error;
    console.log(this.error);
  }

  onSubmit(){
    console.log(this.user);
     this.jwtAPI.signup(this.user).subscribe(
       data => console.log(data),
       error =>this.handleError(error)

     );
  }

}
