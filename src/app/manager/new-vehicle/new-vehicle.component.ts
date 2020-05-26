import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs/Observable';

interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Putnicko', sound: 'Puntnicko!'},
    {name: 'Teretno', sound: 'Teretno!'},
    {name: 'Priključno', sound: 'Prikljucno!'}
  ];

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
     this.formGroup = this.formBuilder.group({
      'Vname': [null, Validators.required],
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
    this.post = post;
  }
}
