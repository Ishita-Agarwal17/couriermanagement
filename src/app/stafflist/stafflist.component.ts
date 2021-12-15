import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service'

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit {

  stafflist: any=[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //debugger
    this.userService.getStafflist().subscribe((data) => {
      console.log(data);
      this.stafflist = data;
    });
  }

}
