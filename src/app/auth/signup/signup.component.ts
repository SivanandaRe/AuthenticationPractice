import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hedline : string = '';

  constructor(private router:Router) {
    this.hedline = 'Sign Up';
   }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    conformPassword: new FormControl('')
  });

  onSubmit() {
    console.log(this.signupForm);
    console.log("Sign Up Successfully");
    this.GotoDashBoard();
  }

  GotoDashBoard() {
    this.router.navigate(['/home/dashboard']);
  }

}
