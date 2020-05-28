import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs/Observable';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  /*type = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);*/
  animals: string[] = ['PUTNICKO', 'TERETNO','PRIKLJUCNO'];

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
     this.formGroup = this.formBuilder.group({
      'Vname': [null, Validators.required],
      'type': [null, Validators.required],
      'date1': [null, Validators.required],
      'date2': [null, Validators.required],
      'number': [null, Validators.required],
      'owner': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }


  get Vname() {
    return this.formGroup.get('Vname') as FormControl
  }
  get type() {
    return this.formGroup.get('type') as FormControl
  }
  get date1() {
    return this.formGroup.get('date1') as FormControl
  }
  get date2() {
    return this.formGroup.get('date2') as FormControl
  }
  get number() {
    return this.formGroup.get('number') as FormControl
  }
  get owner() {
    return this.formGroup.get('owner') as FormControl
  }

  onSubmit(post) {
    var v = { owner_name: post.owner,brand: post.Vname ,type: post.type,
    serial_number: post.number,production_year: "1999",date_of_use: post.date1,previous_inspection: post.date2}
    this.apiService.postVehicle(v).subscribe(arg => {
      console.log(arg)
      this.router.navigate(['/manager/vehicles']);
    });
  }
}
