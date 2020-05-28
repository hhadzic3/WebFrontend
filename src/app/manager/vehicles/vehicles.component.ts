import { Component, OnInit,Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
export interface PeriodicElement {
  vehicle: string;
  type: string;
  owner: string;
}

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  displayedColumns: string[] = ['select','vehicle', 'type', 'owner' ];
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  animal: string;
  vehicles:Vehicles[];
  reviews:Reviews[];
  
  constructor(public dialog: MatDialog,private apiService:ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllVehicles().subscribe(v => {
      this.vehicles = v;
      this.vehicles.forEach(elementV => {

        this.apiService.getDoneRviews('').subscribe(r=>{
          function userExists(id) {
            return r.some(function(el) {
              return el.vehicle === id;
            }); 
          }
          this.reviews = r;
          if (!userExists(elementV.id)) {
            this.ELEMENT_DATA.push({ vehicle: elementV.brand , type: elementV.type, owner: elementV.owner_name });
            this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          }
        })
      });
    })
  }




  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Vehicles } from 'src/app/classes/vehicles';
import { Reviews } from 'src/app/classes/reviews';
import { ApiService } from 'src/app/services/api.service';
import { element } from 'protractor';

export interface DialogData {
  animal: string;
  name: string;
}
interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Hamo', sound: 'Puntnicko!'},
    {name: 'Tarik', sound: 'Teretno!'}
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close();
  }
}