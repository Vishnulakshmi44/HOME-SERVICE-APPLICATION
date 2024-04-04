import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { ServiceproviderloginComponent } from './serviceproviderlogin/serviceproviderlogin.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { ServiceproviderregistrationComponent } from './serviceproviderregistration/serviceproviderregistration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ServiceproviderpageComponent } from './serviceproviderpage/serviceproviderpage.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ServiceproviderlistComponent } from './serviceproviderlist/serviceproviderlist.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ServiceprofileComponent } from './serviceprofile/serviceprofile.component';
import { ServiceprofileupdateComponent } from './serviceprofileupdate/serviceprofileupdate.component';
import { AddpackageformComponent } from './addpackageform/addpackageform.component';
import { BookserviceComponent } from './bookservice/bookservice.component';
import { ViewpackagesComponent } from './viewpackages/viewpackages.component';
import { ViewservicesComponent } from './viewservices/viewservices.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    CustomerloginComponent,
    ServiceproviderloginComponent,
    CustomerregistrationComponent,
    ServiceproviderregistrationComponent,
    HeaderComponent,
    FooterComponent,
    ServicepageComponent,
    CustomerpageComponent,
    AdminpageComponent,
    ServiceproviderpageComponent,
    CustomerprofileComponent,
    CustomerupdateComponent,
    CustomerlistComponent,
    ServiceproviderlistComponent,
    ContactpageComponent,
    ServiceprofileComponent,
    ServiceprofileupdateComponent,
    AddpackageformComponent,
    BookserviceComponent,
    ViewpackagesComponent,
    ViewservicesComponent,
    ViewmoreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
