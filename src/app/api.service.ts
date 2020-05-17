import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = 'http://localhost:8080/api/login';

  constructor(private http : HttpClient) { }

  login(loginData: { username: string; password: string; }) {
    this.http.post( this.url , loginData ).subscribe(res => {
    });
    
  }

}
