import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Vehicles } from 'src/app/classes/vehicles';
import { Reviews } from 'src/app/classes/reviews';
import { UserDetails, AuthenticationService } from 'src/app/services/authentication.service';
import { Router, NavigationEnd } from '@angular/router';

export interface vehicle {
  RevId:number;
  vehicle: string;
  type: string;
  owner: string;
}
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  panelOpenState = false;
  typesOfThings: string[] = [ "Idetifikacija osobe i vozila (provjera dokumentacije i identiteta vlasnika i vozila)"
  ,   "Vizuelna inspekcija automobila","Detaljna analiza"
  ,   "Elektrika",   "Motor i izduvni sistem",   "Upravljački mehanizam / vješanje"
  ,   "Sistem za prijenos snage / transmisija"
  ,   "Karoserija", "Grijanje i Ventilacija",   "Gorivo"
    ,   "Sistem punjenja",   "Sistem paljenja",   "Sistem za hlađenje"
    ,   "Brave/alarmi",   "Kočnice",   "Stakla",   "Svjetla"];
    
    veh: vehicle[] = [];

    vehicles:Vehicles;
    reviews:Reviews[];
    details: UserDetails; 

    constructor(private apiService:ApiService,private auth: AuthenticationService,private router: Router) { }
    ngOnInit(): void {
      this.auth.profile().subscribe(
        user => {
          this.details = user
          this.apiService.getInProgressRviews(this.details.id).subscribe(r=>{
            this.reviews = r;
            r.forEach(element => {
              this.apiService.getRelatedVehicles(element).subscribe(v => {
                this.vehicles = v;
                this.veh.push(  { RevId: element.id, vehicle: v.brand, type: v.type, owner: v.owner_name });
              });    
            });
          })
        },
        err => {
          console.error(err)
        }
      )

    }

    
    updateReview(id:number){
      this.apiService.updatePutReview(id , 'ZAVRSEN').subscribe(data => {
        console.log(data);
        window.location.reload();
      })
    }
}
