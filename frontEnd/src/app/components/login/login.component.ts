import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../../_models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public user: User = new User();

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
     console.log(this.user);
     return this.http.post('http://localhost:8000/api/login',this.user).subscribe(
       data => console.log(data),
       error =>console.log(error)

     );
  }

}
