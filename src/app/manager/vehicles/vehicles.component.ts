import { Component, OnInit,Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  displayedColumns: string[] = ['select','position',  'vehicle', 'type', 'owner' , 'rewiev_done_by'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  animal: string;

  constructor(public dialog: MatDialog) {}

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
  ngOnInit(): void {}
}

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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