import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
   fullName:string='Amit Sharma';
   msg:string='';
  constructor() { }

  ngOnInit(): void {
  }
 nameChangeHandler(msg:string){
  this.msg=msg;
 }
}
