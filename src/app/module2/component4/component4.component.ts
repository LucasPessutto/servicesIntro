import { Service1Service } from './../service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  num = 0

  constructor(private service1: Service1Service) { }

  ngOnInit(): void {
    this.num = this.service1.num
  }

}
