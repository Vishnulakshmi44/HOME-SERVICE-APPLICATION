import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.css']
})
export class CustomerregistrationComponent {


  // //To hold Register Details
  RegisterError: string = '';
  RegisterSuccess: string = '';
  constructor(private fb: FormBuilder, private api: ApiService, private Router: Router) { }

  // Creating validation

  // customerRegisterForm = this.fb.group({
  //   Name: ['', [Validators.required]],
  //   Address: ['', [Validators.required]],
  //   MobileNumber: ['', [Validators.required]],
  //   EmailAddress: ['', [Validators.required]],
  //   Password: ['', [Validators.required]],
  // })

  // registeruser() {
  //   if (this.customerRegisterForm.valid) {
  //     console.log(this.customerRegisterForm.value);
  //     let Name = this.customerRegisterForm.value.Name
  //     let Address = this.customerRegisterForm.value.Address
  //     let MobileNumber = this.customerRegisterForm.value.MobileNumber
  //     let EmailAddress = this.customerRegisterForm.value.EmailAddress
  //     let Password = this.customerRegisterForm.value.Password

//API CALL FOR REGISTER

// this.api.registeruser( Name, Address,MobileNumber,EmailAddress,Password, ).subscribe((response:any) =>{
  // Swal.fire("Registered", "You have Successfully Registered ", "success").then((result) => {
    // console.log(response); //message
    // alert("You have Successfully Registered") //success
    // this.RegisterSuccess = response.message;
    // setTimeout(() => {
      //redirect to loginpage
//       this.Router.navigateByUrl('/customer/customerlogin')
//     }, 2000)
 
// },
// (response: any) => {
  // Swal.fire("Error", "Invalid Details", "error")
//   this.RegisterError = response.error.alert("Invalid Details");//error message

//   setTimeout(() => {
//     this.customerRegisterForm.reset()
//     this.RegisterError = '';
//   }, 1000);
// }
// )
// }
// else{
// alert('Invalid Form')
// }
// }
}

    





