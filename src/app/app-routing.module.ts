import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component'
import {LoginComponent } from './login/login.component'
import {ContactComponent } from './contact/contact.component'
import {ManagerComponent} from './manager/manager.component'
import {MechanicComponent} from './mechanic/mechanic.component'
import {VehiclesComponent} from './manager/vehicles/vehicles.component'
import {NewVehicleComponent} from './manager/new-vehicle/new-vehicle.component'
import {InProgressComponent} from './manager/in-progress/in-progress.component'

import {TasksComponent} from './mechanic/tasks/tasks.component'
import {RewievsComponent} from './mechanic/rewievs/rewievs.component'
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
    { path: 'home', component:  HomeComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'contact', component:  ContactComponent },
    { path: 'manager', component:  ManagerComponent , canActivate:[AuthGuardService],
    children : [
      {path: '', redirectTo: 'vehicles', pathMatch: 'full'} ,
      {path: 'vehicles', component:  VehiclesComponent},
      {path: 'newVehicle', component:  NewVehicleComponent},
      {path: 'inProgess', component:  InProgressComponent}
    ]
    },
    { path: 'mechanic', component:  MechanicComponent , canActivate:[AuthGuardService],
    children : [
      {path: '', redirectTo: 'tasks', pathMatch: 'full'} ,
      {path: 'tasks', component:  TasksComponent},
      {path: 'rewievs', component:  RewievsComponent}
    ]
   },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
