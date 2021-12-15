import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Staff{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getStaff()
  {
    console.log("test call");
    return this.httpClient.get<Staff[]>('http://localhost:8088/empl');
  }

  public deleteEmployee(staff:any) {
    return this.httpClient.delete<Staff>("http://localhost:8088/empl" + "/"+ staff.empId);
  }

  public createEmployee(staff:any) {
    return this.httpClient.post<Staff>("http://localhost:8088/empl/v", staff);
  }
}
