import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-selectoption',
  templateUrl: './selectoption.component.html',
  styleUrls: ['./selectoption.component.css']
})
export class SelectoptionComponent implements OnInit {
  courses = ["Bsc","Btech","BCA","MCA","MBA","MBBS"];
  response:any;
  constructor(private backendService:BackendServiceService) { }

  ngOnInit() {
    this.backendService.connectToBackend().subscribe(
      res=>{
        this.response=res.result;
       console.log(res);
        
      },
      err=>{
        console.log(err);
      }
    )
  }

}
