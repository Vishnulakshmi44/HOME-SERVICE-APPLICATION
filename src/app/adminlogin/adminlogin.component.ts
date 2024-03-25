import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {}
  // loginSuccess: string=''
  // loginError: string =''

  // constructor(private fb: FormBuilder, private api: ApiService, private Router: Router) { }
  // adminLoginForm = this.fb.group({
  //   EmailAddress:  ['', [Validators.required]],
  //   Password: ['', [Validators.required]]
  // })

  // adminLogin() {
  //   if (this.adminLoginForm.valid) {
  //     console.log(this.adminLoginForm.value);
  //     let EmailAddress = this.adminLoginForm.value.EmailAddress
  //     let Password = this.adminLoginForm.value.Password

  //     //API CALL FOR LOGIN

  //     this.api.adminLogin(EmailAddress,Password).subscribe((response: any)=>{
  //       console.log(response);
  //       alert("Login Successfull")
  //       this.loginSuccess = response.message;
  //       setTimeout(() => {
  //         //redirect to loginpage
  //         this.Router.navigateByUrl('/customer/customerpage')
  //       }, 2000)
     
  //   },
  //   (response: any) => {
  //     // Swal.fire("Error", "Invalid Details", "error")
  //     this.loginError = response.error.alert("Invalid Details");//error message
    
  //     setTimeout(() => {
  //       this.adminLoginForm.reset()
  //       this.loginError= '';
  //     }, 1000);
  //   }
  //   )
  //   }
  //   else{
  //   alert('Invalid Form')
  //   }
  //   }
  //   }
       