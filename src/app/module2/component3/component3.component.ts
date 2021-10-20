import { Service1Service } from './../service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  num = 0

  constructor(private servive1: Service1Service) { }

  ngOnInit(): void {
    this.num = this.servive1.num
  }

}
