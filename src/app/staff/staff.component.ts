import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpclientService, Staff } from '../httpclient.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffs: any=[];
   
  constructor(
    private httpClientService:HttpclientService, private route:Router
  ) { }

  ngOnInit() {
    this.httpClientService.getStaff().subscribe(
     response =>
     this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response:any)
{
    this.staffs=response;
}

deleteEmployee(staff: any): void {
  this.httpClientService.deleteEmployee(staff)
    .subscribe( data => {
      this.staffs = this.staffs.filter((u:any) => u !== staff);
    })
};

logout(){
  this.route.navigateByUrl("/masterLogin");
}

}
