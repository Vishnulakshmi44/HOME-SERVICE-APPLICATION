import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent {

// To hold Customer Details
  loginError: string = '';
  loginSuccess: boolean = false;
 
  
  constructor(private fb: FormBuilder, private api: ApiService, private Router: Router) { }
 
  //  create validation
  customerLoginForm = this.fb.group({
    Username: ['', [Validators.required]],
    Password: ['', [Validators.required]]

  })

  loginuser() {
    if (this.customerLoginForm.valid) {
      console.log(this.customerLoginForm.value);
      let Username = this.customerLoginForm.value.Username
      let Password = this.customerLoginForm.value.Password

      //API CALL FOR LOGIN

      this.api.loginuser(Username,Password).subscribe((response: any)=>{
        console.log(response);
        alert("Login Successfull")
        this.loginSuccess = response.message;
        setTimeout(() => {
          //redirect to loginpage
          this.Router.navigateByUrl('/customer/customerpage')
        }, 2000)
     
    },
    (response: any) => {
      // Swal.fire("Error", "Invalid Details", "error")
      this.loginError = response.error.alert("Invalid Details");//error message
    
      setTimeout(() => {
        this.customerLoginForm.reset()
        this.loginError= '';
      }, 1000);
    }
    )
    }
    else{
    alert('Invalid Form')
    }
    }
    }
       