import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
                                                           
  hedline : string = '';
  // disabled : boolean = true;                                                                                
  // nametwoway : string = '';

  constructor(private router: Router) { 
    this.hedline = 'Sign In';
    // this.nametwoway = 'sivananda';
  }

  ngOnInit(): void { }

  signinForm = new FormGroup({
    emailAddress: new FormControl('',Validators.required),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.signinForm);
    console.log(this.signinForm.value.emailAddress);
    console.log(this.signinForm.value.password);
    console.log("Sign In Successfully");
    this.GotoDashBoard();
  }

  GotoDashBoard(){
    this.router.navigate(['/home/dashboard']);
  }

}
