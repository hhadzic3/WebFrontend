import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getDoneRviews(state:string):Observable<Reviews[]>{
    if (state === '') return this.http.get<Reviews[]>( this.url+'/review');
    return this.http.get<Reviews[]>( this.url+'/review/state/'+ state);
  }
  
  getAllVehicles():Observable<Vehicles[]>{
    return this.http.get<Vehicles[]>( this.url+'/vehicle');
  }
  getAllUsers(job:string):Observable<Users[]>{
    return this.http.get<Users[]>( this.url+'/user/position/' + job);
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
  updatePutReview(revId:number , state:string) : Observable<Object>{
    var string = '{"state": "ZAVRSEN"}';
    var review = JSON.parse(string);
    console.log(review);
    return this.http.put( this.url+'/review/'+ revId , review);
  }
  postReview(rev) : Observable<Object>{
    var review = JSON.parse(rev);
    console.log(review);
    return this.http.post( this.url+'/review' , review);
  }
  postVehicle(v) : Observable<Object>{
    return this.http.post( this.url+'/vehicle' , v);
  }


}
