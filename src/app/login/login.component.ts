import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthenticationService, TokenPayload } from '../services/authentication.service'
import { Router } from '@angular/router'
import {MatDialog} from '@angular/material/dialog';

import {MatDialogRef} from '@angular/material/dialog';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  openDialog() {
    this.dialog.open(Alert);
  }
  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    position: '',
    mail: '',
    user_name: '',
    password: ''
  }
  formGroup: FormGroup;
  constructor(private auth: AuthenticationService, private router: Router,private formBuilder: FormBuilder,public dialog: MatDialog) {}
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
        this.openDialog();
      }
    )
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }
  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }
  onSubmit(post) {
  }
}


@Component({
  selector: 'alert',
  templateUrl: 'alert.html',
})
export class Alert {
  constructor(public dialogRef: MatDialogRef<Alert>) {}
  onCClick(): void {
    this.dialogRef.close();
  }
}