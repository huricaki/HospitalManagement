import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material/material.module';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DataService } from 'src/app/shared/service/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  constructor( public dialog:MatDialog,
    private dataApi:DataService,
    private _snackBar:MatSnackBar 
    ){

  }
   
  
  addDoctor(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.data={
      title:'Register Doctor'
    }

    const dialogRef=this.dialog.open(AddDoctorComponent,dialogConfig);
  dialogRef.afterClosed().subscribe(data=>{
    if(data){
      this.dataApi.addDoctor(JSON.stringify(data));
      console.log('apiye gönderildi '+ JSON.stringify(data));
      this.openSnackBar("Registration of doctor successful.","OK");
    }
  })
  
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
