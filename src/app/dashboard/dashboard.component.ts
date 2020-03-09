import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  childVal : any;

  batvar="LOL LMAO ROFL HAHA HOHO";

  onChildData(msg){
    this.childVal = msg;
  }

}
