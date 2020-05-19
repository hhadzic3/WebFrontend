import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    position: '',
    mail: '',
    user_name: '',
    password: ''
  }
  

  constructor(private auth: AuthenticationService, private router: Router) {}
  makeRoute(){
    var job = this.auth.getUserDetails()?.position;

    if (job == 'MENADZER' || job == 'MANAGER')
      this.router.navigate(['/manager']);
    else this.router.navigate(['/mechanic']);

  }
  login() {
    this.auth.login(this.credentials).subscribe(
      () => { 
        this.makeRoute();
      },
      err => {
        console.error(err)
      }
    )
  }
  
ngOnInit(): void {
}

}
