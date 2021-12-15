import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerdashboard',
  templateUrl: './managerdashboard.component.html',
  styleUrls: ['./managerdashboard.component.css']
})
export class ManagerdashboardComponent implements OnInit {

  constructor(private logoutmaaster: Router, private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.logoutmaaster.navigateByUrl("/masterLogin");
  }
  courierlist(){
    this.route.navigateByUrl("/courier");
  }
  addstaff(){
    this.route.navigateByUrl("/addstaff");
  }
  stafflist(){
    this.route.navigateByUrl("/stafflist");
  }

  officelist(){
    this.route.navigateByUrl("/officelist");
  }
  

}
