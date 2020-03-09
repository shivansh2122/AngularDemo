import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private registerService : BackendServiceService,private router:Router) { }
  signupform=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    email:new FormControl('')
  })

  ngOnInit() {
  }

  onSubmit(){
    console.log("before call",this.signupform.value);  
    this.registerService.registerUser(this.signupform.value).subscribe(
      res=>{
        console.log(res.result);
        this.router.navigate(['login'])
      }
    )
  }

}
