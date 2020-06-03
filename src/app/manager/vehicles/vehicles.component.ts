import { Component, OnInit,Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
export interface PeriodicElement {
  id:number;
  vehicle: string;
  type: string;
  owner: string;
}


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  displayedColumns: string[] = ['vehicle', 'type', 'owner','select' ];
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  animal: string;
  name: string;
  mechanic: string;
  vehicles:Vehicles[];
  reviews:Reviews[];
  
  constructor(public dialog: MatDialog,private apiService:ApiService,private router: Router) {}
  
  el : PeriodicElement;
  openDialog(element:PeriodicElement): void {
    this.el = element;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.animal = result;
      console.log(this.el);
      this.apiService.getUser(result).subscribe(data => {
        var object  = {state:'NA PREGLEDU', kind: 'REGULARNI', responsible_person:data.id, vehicle:this.el.id }
        this.apiService.postReview(object).subscribe(d => console.log(d));
        //this.router.navigate(['/manager/inProgess']);
        window.location.reload();
      })
    
    });
  }

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
            this.ELEMENT_DATA.push({ id : elementV.id,vehicle: elementV.brand , type: elementV.type, owner: elementV.owner_name });
            this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          }
        })
      });
    })
  }
}

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Vehicles } from 'src/app/classes/vehicles';
import { Reviews } from 'src/app/classes/reviews';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit {

  myControl = new FormControl();
  options: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , private apisevice : ApiService) {}

    ngOnInit(): void {
      this.apisevice.getAllUsers('RADNIK').subscribe(data => {
        data.forEach(d => {
          this.options.push( d.first_name )
        });
      })
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  
}