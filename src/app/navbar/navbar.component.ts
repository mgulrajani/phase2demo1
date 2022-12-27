import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html'
})
export class NavBarComponent implements OnInit {
    userName:string='';
    isLoggedIn:boolean=true;
    pageTitle:string='Events';
  ngOnInit(): void {

  }
  logOut(){}

}
