import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MasterLoginComponent } from './master-login/master-login.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { CourierComponent } from './courier/courier.component';
import { StaffComponent } from './staff/staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { OfficeComponent } from './office/office.component';
import { HomedashComponent } from './homedash/homedash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MasterLoginComponent,
    ManagerdashboardComponent,
    CourierComponent,
    StaffComponent,
    AddStaffComponent,
    StafflistComponent,
    OfficeComponent,
    HomedashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
