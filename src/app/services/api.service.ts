import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicles } from '../classes/vehicles';
import { Reviews } from '../classes/reviews';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url : string = 'http://localhost:8080/api';

  constructor(private http : HttpClient) { }

  getDoneRviews():Observable<Reviews[]>{
    return this.http.get<Reviews[]>( this.url+'/review/state/ZAVRSEN');
  }
  getInProgressRviews(id:number):Observable<Reviews[]>{
    if (id === 0) return this.http.get<Reviews[]>( this.url+'/review/state/NA PREGLEDU');
    return this.http.get<Reviews[]>( this.url+'/review/state/NA PREGLEDU/user/' + id);
  }
  getRelatedVehicles(review:Reviews): Observable<Vehicles>{
    return this.http.get<Vehicles>( this.url+'/vehicle/' + review.vehicle);
  }
  getRelatedUsers(review:Reviews): Observable<Users>{
    return this.http.get<Users>( this.url+'/user/' + review.responsible_person);
  }

  /*
  login(loginData) {
    this.http.post( this.url , loginData ).subscribe(res  => {
      console.log(res);
    });
  }*/

}
