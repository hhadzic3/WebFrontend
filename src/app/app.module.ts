import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { ManagerComponent } from './manager/manager.component';
import { VehiclesComponent } from './manager/vehicles/vehicles.component';
import { NewVehicleComponent } from './manager/new-vehicle/new-vehicle.component';
import { InProgressComponent } from './manager/in-progress/in-progress.component';
import { TasksComponent } from './mechanic/tasks/tasks.component';
import { RewievsComponent } from './mechanic/rewievs/rewievs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    FooterComponent,
    MechanicComponent,
    ManagerComponent,
    VehiclesComponent,
    NewVehicleComponent,
    InProgressComponent,
    TasksComponent,
    RewievsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
