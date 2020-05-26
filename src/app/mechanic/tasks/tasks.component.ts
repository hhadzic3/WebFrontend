import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
  }

}
