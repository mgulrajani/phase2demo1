import { Component, ContentChild, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { GreetingComponent } from '../greeting/greeting.component';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

isLoggedIn:boolean=false;
pageTitle:string='Online Shopping ';
constructor(private renderer:Renderer2 ,private router:Router,private authservice:AuthService,private viewref:ViewContainerRef){
  console.log('menu constructor')


}



get userName():string{
if(this.authservice.currentUser)
return this.authservice.currentUser?.userName;

return '';

}


  ngOnInit(): void {
    console.log('menu on init');
    this.isLoggedIn=this.authservice.isLoggedIn;
     if(sessionStorage.getItem('isLogged')==='true'){
      this.isLoggedIn=true;
    } console.log(this.isLoggedIn, 'from init of menu ')

  }

  logOut():void{

    //this should also use the authserviceto logout the current user
    //you can route to some url

    this.authservice.logOut();
    this.router.navigate(['/welcome']);
  }

  ngOnDestroy(): void {
    console.log('menu destroyed');}


    ngOnChanges():void{

      console.log('menu component changes');
      if(sessionStorage.getItem('isLogged')=='true'){
        this.isLoggedIn=true;
      }
    }

}
