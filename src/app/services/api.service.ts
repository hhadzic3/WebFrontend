import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url : string = 'http://localhost:8080/api/login';

  constructor(private http : HttpClient) { }

  login(loginData) {
    this.http.post( this.url , loginData ).subscribe(res  => {
      console.log(res);
      localStorage.setItem('token' , JSON.parse(JSON.stringify(res)).token );
    });
  }

}
