import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../services/api.service';
import {Vehicles} from '../../classes/vehicles';
import { Reviews } from 'src/app/classes/reviews';

export interface PeriodicElement {
  vehicle: string;
  position: number;
  type: string;
  owner: string;
  rewiev_done_by: string;
}
var ELEMENT_DATA: PeriodicElement[];
@Component({
  selector: 'app-rewievs',
  templateUrl: './rewievs.component.html',
  styleUrls: ['./rewievs.component.css']
})
export class RewievsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'vehicle', 'type', 'owner' , 'rewiev_done_by'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  vehicles:Vehicles[];
  reviews:Reviews[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getDoneRviews().subscribe(arg => this.reviews = arg);
    this.reviews.forEach(element => {
      this.apiService.getRelatedVehicles(element).subscribe(arg => this.vehicles.push(arg));
    });
    
    this.vehicles.forEach(element => {
      ELEMENT_DATA.push({position: 1, vehicle: 'Hydrogen', type: "transport", owner: 'H' ,rewiev_done_by: 'Hamo' });
    });
    
  }
  
}
