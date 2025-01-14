import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  constructor(private http:HttpClient){}
  
  loginForm :FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  });

  onSubmit() {
    throw new Error('Method not implemented.');
    }
}

