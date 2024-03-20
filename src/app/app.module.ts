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
import { ApiComponent } from './services/api/api.component';

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
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
