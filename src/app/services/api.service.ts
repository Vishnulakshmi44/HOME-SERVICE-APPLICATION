import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  base_url:string=`http://localhost:9000`

  constructor(private http: HttpClient) { }

  // User Register
  // registeruser(name: any, address: any, contactnumber: any, email: any, password: any,) {
  //   const body = {
  //               name,
  //               address,
  //               email,
  //               contactnumber,
  //               password,
  //               // userimage,
  //   }
  //   return this.http.post(`${this.base_url}/user/register`, body)
  // }

  // User Login 

  // loginuser(email: any, password: any) {
  //   const body = {
  //    email,
  //    password,
  //   }
  //   return this.http.post(`${this.base_url}/user/login`, body)

  // }
//Admin login

  // adminLogin(EmailAddress: any, Password: any) {
  //   const body = {

  //     EmailAddress,
  //     Password


  //   }
  //   return this.http.post('http://localhost:5000/admin/adminlogin', body)
  // }

  





}


