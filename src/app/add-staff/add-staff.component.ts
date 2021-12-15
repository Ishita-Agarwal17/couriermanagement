import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpclientService, Staff } from '../httpclient.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  user:any

  constructor(
    private httpClientService:HttpclientService, private route:Router
    ) { }

  ngOnInit(): void {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

  logout(){
    this.route.navigateByUrl("/masterLogin");
  }

}
