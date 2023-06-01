import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { AddDoctorComponent } from './component/dashboard/doctor/add-doctor/add-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { DoctorListComponent } from './component/dashboard/doctor/doctor-list/doctor-list.component';
@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    SidebarComponent,
    AddDoctorComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddDoctorComponent]
})
export class AppModule { }
