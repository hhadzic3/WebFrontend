import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  vehicle: string;
  position: number;
  type: string;
  owner: string;
  rewiev_done_by: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, vehicle: 'Hydrogen', type: "transport", owner: 'H' ,rewiev_done_by: 'Hamo' },
  {position: 2, vehicle: 'Helium', type: "transport", owner: 'He' , rewiev_done_by: 'Hamo'}
];
@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {
  displayedColumns: string[] = ['position',  'vehicle', 'type', 'owner' , 'rewiev_done_by'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
