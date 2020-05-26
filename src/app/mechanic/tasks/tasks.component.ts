import { Component, OnInit } from '@angular/core';


export interface vehicle {
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
  constructor() { }
  typesOfThings: string[] = [ "Idetifikacija osobe i vozila (provjera dokumentacije i identiteta vlasnika i vozila)"
    ,   "Vizuelna inspekcija automobila","Detaljna analiza"
    ,   "Elektrika",   "Motor i izduvni sistem",   "Upravljački mehanizam / vješanje"
    ,   "Sistem za prijenos snage / transmisija"
    ,   "Karoserija", "Grijanje i Ventilacija",   "Gorivo"
    ,   "Sistem punjenja",   "Sistem paljenja",   "Sistem za hlađenje"
    ,   "Brave/alarmi",   "Kočnice",   "Stakla",   "Svjetla"];

    Vehicles: vehicle[] = [
      { vehicle: 'Hydrogen', type: "transport", owner: 'H' },
      { vehicle: 'Helium', type: "transport", owner: 'He' }
    ];
  ngOnInit(): void {
  }

}
