import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email
  password
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, ) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
      this.email= this.loginForm.controls.email.value,
     this.password= this.loginForm.controls.password.value
    console.log(this.email,this.password)
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
      console.log("user created")
      var errorCode = error.code;
      var errorMessage = error.message;
     
    });
  }

 
}
