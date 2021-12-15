import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MasterLoginComponent } from './master-login/master-login.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { CourierComponent } from './courier/courier.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffComponent } from './staff/staff.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { OfficeComponent } from './office/office.component';
import { HomedashComponent } from './homedash/homedash.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'userLogin', component: LoginComponent },
  { path: 'courier', component: CourierComponent },
  { path: 'masterLogin', component: MasterLoginComponent },
  { path: 'masterDashboard', component: ManagerdashboardComponent },
  {path: 'view', component: StaffComponent},
  { path: 'addstaff', component: AddStaffComponent },
  {path:'stafflist', component: StafflistComponent},
  {path:'officelist', component:OfficeComponent},
  {path:'homedash', component: HomedashComponent},
  { path: '', redirectTo: 'homedash', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
