import { Service2Service } from './../../service2.service';
import { Service1 } from './../service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  // providers: [Service1],
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  num = 0
  text = ""

  constructor(private service1: Service1, private service2: Service2Service) { }

  ngOnInit(): void {
    this.num = this.service1.num
    this.text = this.service2.text
  }

}
