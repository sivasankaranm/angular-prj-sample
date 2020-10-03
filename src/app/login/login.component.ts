import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customer = {password:"", email:""}

  onFormSubmit(data){
     //alert("The Name is: " + data.customerName + "The Email id entered by the customer is:" + data.emailId)
  }

}