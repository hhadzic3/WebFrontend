import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarOpen = false;
  constructor(public auth: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
  makeRoute(){
    var job = this.auth.getUserDetails()?.position;

    if (job == 'MENADZER' || job == 'MANAGER' || job == 'ADMINISTRATOR')
      this.router.navigate(['/manager']);
    else this.router.navigate(['/mechanic']);

  }

}
