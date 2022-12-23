import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  productName:string='mouse';
  constructor() { }

  ngOnInit(): void {
  }
 handler(msg:string){
  this.productName=msg;
 }
}
