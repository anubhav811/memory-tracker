import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private http:HttpClient){}
  
  registerForm :FormGroup = new FormGroup({
    'username' : new FormControl(null),
    'email': new FormControl(null),
    'password': new FormControl(null)
  });

  onSubmit(){
    this.http.post<{user : User}>(
      'https://api.realworld.io/api/users',
      {
        user:this.registerForm.getRawValue()
      }
    ).subscribe(response => {
      console.log('response recieved ', response)
    })
  }
}
