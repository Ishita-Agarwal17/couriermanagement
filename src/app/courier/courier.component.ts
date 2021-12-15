
import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service'
import { Courier } from '../courier';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {

  couriers: any=[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //debugger
    this.userService.getCouriers().subscribe((data) => {
      console.log(data);
      this.couriers = data;
    });
  }

}