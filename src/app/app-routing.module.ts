import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { ServiceproviderloginComponent } from './serviceproviderlogin/serviceproviderlogin.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { ServiceproviderregistrationComponent } from './serviceproviderregistration/serviceproviderregistration.component';
const routes: Routes = [
  {
    path:"", component:HomeComponent
  },

  {
     path:"admin/adminlogin", component:AdminloginComponent
  },
  {
    path:"customer/customerregister", component:CustomerregistrationComponent
  },
    
  {
    path:"customer/customerlogin", component:CustomerloginComponent
 },
 {
  path:"serviceprovider/serviceproviderregister", component:ServiceproviderregistrationComponent
},
 {
  path:"serviceprovider/serviceproviderlogin", component:ServiceproviderloginComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
