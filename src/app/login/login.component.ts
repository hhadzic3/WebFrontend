import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = { username:'' , password:''};

  post(){
    this.apiService.login(this.loginData);
    console.log(this.loginData);
  }

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

}
