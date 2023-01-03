import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
@Input() messageText:string='Welcome to angular content projection'
  constructor() {console.log('greeting constructed') }
  ngOnDestroy(): void {
    console.log('greeting destroyed');}

    ngOnInit(): void {
      console.log('greeting in oninit');
    }
    ngOnChanges():void{
     console.log('greeting component changes');
    }

    ngDoCheck(){
      console.log('doCheck of greeting');
    }

    ngAfterContentInit(){

      console.log('greeting content init');

    }
    ngAfterContentChecked(){
      console.log('greeting content checked');
    }
    ngAfterViewInit(){
      console.log('greeting view init');

    }

   ngAfterViewChecked(){
    console.log('greeting view checked');

   }

  }
