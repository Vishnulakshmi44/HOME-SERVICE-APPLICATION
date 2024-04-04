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
import { BookserviceComponent } from './bookservice/bookservice.component';
import { ViewpackagesComponent } from './viewpackages/viewpackages.component';
import { ViewservicesComponent } from './viewservices/viewservices.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
const routes: Routes = [
  //Home Page
  {
    path: "", component: HomeComponent
  },
  // Admin Login
  {
    path: "admin/adminlogin", component: AdminloginComponent
  },
  //Admin Dashboard
  {
    path: "admin/adminpage", component: AdminpageComponent
  },
  //Admin Customerlist - from dashboard
  {
    path: "adminpage/customerlist", component: CustomerlistComponent
  },
  //Admin serviceproviderlist - from dashboard

  {
    path: "adminpage/serviceproviderlist", component: ServiceproviderlistComponent
  },
  // CustomerRegister

  {
    path: "customer/customerregister", component: CustomerregistrationComponent
  },
  //Customer Login
  {
    path: "customer/customerlogin", component: CustomerloginComponent
  },
  // Customer interface
  {
    path: "customer/customerpage", component: CustomerpageComponent
  },
  //Customer Profile
  {
    path: "customerpage/customerprofile", component: CustomerprofileComponent
  },
  // Customer Profile Update
  {
    path: "customerprofile/update", component: CustomerupdateComponent
  },
  //Service Provider Register
  {
    path: "serviceprovider/serviceproviderregister", component: ServiceproviderregistrationComponent
  },
  //Service Provider Login
  {
    path: "serviceprovider/serviceproviderlogin", component: ServiceproviderloginComponent
  },
  //Service provider - dashboard
  {
    path: "serviceprovider/serviceproviderpage", component: ServiceproviderpageComponent
  },
  //Service Provider Profile
  {
    path: "serviceproviderpage/serviceprofile", component: ServiceprofileComponent
  },
  //Service Provider -Add Packages
  {
    path: "serviceproviderpage/addpackage", component: AddpackageformComponent
  },
  //Service Provider - Update
  {
    path: "serviceprofile/update", component: ServiceprofileupdateComponent
  },
  //SERvices listing page ..from home
  {
    path: "services/servicespage", component: ServicepageComponent
  },
  // Contact Us Page
  {
    path: "home/contact", component: ContactpageComponent
  },
  // Book Service Page - from view services
  {
    path: "service/bookservice", component: BookserviceComponent
  },
  //View Packages given by service provider for customer and service provider
  {
    path: "customer/viewpackages", component: ViewpackagesComponent
  },
  // Service page for viewing services and for booking appointments

  {
    path: "customer/viewservices", component: ViewservicesComponent
  },
  {
    path: "servicespage/viewmore", component: ViewmoreComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
