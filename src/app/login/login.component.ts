import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : BackendServiceService,private router: Router) { }

  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
        
  }

  onSubmit(){
    console.log(this.loginform.value);
    this.authService.getAuthourized(this.loginform.value).subscribe(
      res=>{
        localStorage.setItem("token",res.result.token);
        console.log(res.result.token);
        this.router.navigate(['dashboard']);
      }
    )

   

  }

}
