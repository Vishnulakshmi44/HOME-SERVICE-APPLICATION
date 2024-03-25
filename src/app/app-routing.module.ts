import { AddpackageformComponent } from './addpackageform/addpackageform.component';
import { ServiceprofileupdateComponent } from './serviceprofileupdate/serviceprofileupdate.component';
import { ServiceprofileComponent } from './serviceprofile/serviceprofile.component';
import { ServiceproviderpageComponent } from './serviceproviderpage/serviceproviderpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { ServiceproviderloginComponent } from './serviceproviderlogin/serviceproviderlogin.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { ServiceproviderregistrationComponent } from './serviceproviderregistration/serviceproviderregistration.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ServiceproviderlistComponent } from './serviceproviderlist/serviceproviderlist.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
const routes: Routes = [
  {
    path:"", component:HomeComponent
  },

  {
     path:"admin/adminlogin", component:AdminloginComponent
  },
  {
    path:"admin/adminpage", component:AdminpageComponent
 },
 {
  path:"adminpage/customerlist", component:CustomerlistComponent
},
{
  path:"adminpage/serviceproviderlist", component:ServiceproviderlistComponent
},
  
  {
    path:"customer/customerregister", component:CustomerregistrationComponent
  },
    
  {
    path:"customer/customerlogin", component:CustomerloginComponent
 },
 {
  path:"customer/customerpage", component:CustomerpageComponent
},
{
  path:"customerpage/customerprofile", component:CustomerprofileComponent
},
{
  path:"customerprofile/update", component:CustomerupdateComponent
},
 {
  path:"serviceprovider/serviceproviderregister", component:ServiceproviderregistrationComponent
},
 {
  path:"serviceprovider/serviceproviderlogin", component:ServiceproviderloginComponent
},
{
  path:"serviceprovider/serviceproviderpage", component:ServiceproviderpageComponent
},
{
  path:"serviceproviderpage/serviceprofile", component:ServiceprofileComponent
},
{
  path:"serviceproviderpage/addpackage", component:AddpackageformComponent
},
{
  path:"serviceprofile/update", component:ServiceprofileupdateComponent
},
{
  path:"services/servicespage", component:ServicepageComponent
},
{
  path:"home/contact", component:ContactpageComponent
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
