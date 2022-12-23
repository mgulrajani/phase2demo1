import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeMsg:string="Welcome to Angular App";
  num:number=0;
  data:number=3;
  constructor() { }

}
