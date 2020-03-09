import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-uppercontainer',
  templateUrl: './uppercontainer.component.html',
  styleUrls: ['./uppercontainer.component.css']
})
export class UppercontainerComponent implements OnInit {

  @Input() batval: any;

  @Output() info = new EventEmitter();

  hemantData: any ="Dheeraj";


  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width:500,height:500, title: 'A Fancy Plot'}
};
  constructor() { }

  ngOnInit() {
    this.emitHemant();
  }

  emitHemant(){
    this.info.emit(this.hemantData);
  }

}
