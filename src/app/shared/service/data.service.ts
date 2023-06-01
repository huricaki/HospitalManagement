import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const headers = {
  'Content-Type': 'application/json'
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient:HttpClient) { }
  private apiUrl='http://localhost:3307/api/doctor';
  private getDoctorApiUrl='http://localhost:3307/api/getdoctor';
  addDoctor(doctor:any) {
   return this.httpClient.post(this.apiUrl, doctor,{headers}).subscribe(Response=>{
    console.log(Response);
   })
  }

  getDoctor(){
    
    return this.httpClient.get<any[]>(this.getDoctorApiUrl); 
  }
}
