import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicles } from '../classes/vehicles';
import { Reviews } from '../classes/reviews';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url : string = 'http://localhost:8080/api';

  constructor(private http : HttpClient) { }

  getDoneRviews(): Observable<Reviews[]>{
    return this.http.get<Reviews[]>( this.url+'/review/status/ZAVRSEN');
  }
  getRelatedVehicles(review:Reviews): Observable<Vehicles>{
    return this.http.get<Vehicles>( this.url+'/vehicle/' + review.vehicle);
  }

  /*
  login(loginData) {
    this.http.post( this.url , loginData ).subscribe(res  => {
      console.log(res);
    });
  }*/

}
