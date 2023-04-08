import { Component,Inject,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { retryWhen } from 'rxjs';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent  {
 formF =FormControl;
 @Input() form!:FormGroup;
title!:string;
name!:string;
mobile!:string;
email!:string;
gender!:string;
department!:string;
birthDate!:string;

 departments: string[] = [
  'Cardiology',
  'Oncology',
  'Neurology',
  'Pediatrics',
  'Orthopedics',
  'Gynecology',
  'Endocrinology',
  'Dermatology',
  'Gastroenterology',
  'Hematology',
  'Nephrology',
  'Pulmonology',
  'Psychiatry',
  'Radiology',
  'Urology',
  'Ophthalmology',
  'Otolaryngology',
  'Infectious Diseases',
  'Rheumatology',
  'Allergology',
  'Emergency Medicine'
];

constructor(
  private fb:FormBuilder,
  private dialogRef:MatDialogRef<AddDoctorComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
){
this.title=data.title;
}

ngOnInit(): void{
  this.form=this.fb.group({
    id:['',[]],
    name:['',[Validators.required]],
    mobile:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
    email:['',[Validators.required]],
    gender:['',[Validators.required]],
    department:['',[Validators.required]],
    birthDate:['',[Validators.required]],
    qualification:['',[Validators.required]]
  })
}


cancelRegistration(){
this.dialogRef.close();
}
registerDoctor(){
this.dialogRef.close(this.form.value);
}
}
