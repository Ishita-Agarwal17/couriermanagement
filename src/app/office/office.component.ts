import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service'

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  officelist: any=[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //debugger
    this.userService.getOffice().subscribe((data) => {
      console.log(data);
      this.officelist = data;
    });
  }

}
