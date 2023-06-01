import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import {DoctorListComponent} from './component/dashboard/doctor/doctor-list/doctor-list.component';
const routes: Routes = [
  {path:'dashboard',children:[
    {path:'',redirectTo:'patient', pathMatch:'full'},
    {path:'patient',component:PatientComponent},
    {path:'doctor',component:DoctorComponent},
    {path:'doctorList',component:DoctorListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
