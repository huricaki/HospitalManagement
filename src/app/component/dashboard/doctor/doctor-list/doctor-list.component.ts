//import { Component } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from 'src/app/shared/service/data.service';
import { Doctor } from 'src/app/shared/model/doctor';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
 displayColums:string[]=['id','name','mobile','email','gender','department','birthDate','qualification','createdAt','updatedAt'];
  doctors:string[]=[];
  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.getDoctor().subscribe(response=>
      this.doctors=response);
      console.log(this.doctors);
  }
}
