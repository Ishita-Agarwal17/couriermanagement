import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courier } from '../courier';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 // private baseUrl = "http://localhost:8088/api/v1/courier";

  constructor(private http: HttpClient) { }

  getCouriers(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8088/api/v1/courier');
  }

  getStafflist(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8088/empl/findAllStaff');
  }

  getOffice(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8088/api/v1/findAllOfficeData');
  }
}











// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:8080/api/test/';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   constructor(private http: HttpClient) { }

//   getPublicContent(): Observable<any> {
//     return this.http.get(API_URL + 'all', { responseType: 'text' });
//   }

//   getUserBoard(): Observable<any> {
//     return this.http.get(API_URL + 'user', { responseType: 'text' });
//   }

//   getModeratorBoard(): Observable<any> {
//     return this.http.get(API_URL + 'mod', { responseType: 'text' });
//   }

//   getAdminBoard(): Observable<any> {
//     return this.http.get(API_URL + 'admin', { responseType: 'text' });
//   }
// }
