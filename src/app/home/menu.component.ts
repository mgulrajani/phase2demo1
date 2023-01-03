import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { GreetingComponent } from '../greeting/greeting.component';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(GreetingComponent)greetingc!:GreetingComponent;
  //how to access ref1 template reference variable in component

  @ViewChild('ref1',{read:TemplateRef})ref1!: TemplateRef<any>;

pageTitle:string='Online Shopping ';

get isLoggedIn():boolean{
  //service to return the loggedInstatus ofthe user
  //we will have to inject a authentication service which will checkt the loggedIn
 //still pending
  return this.authservice.isLoggedIn();
}


get userName():string{

//thru the authentication service we can the current user
//that we will return
if(this.authservice.currentUser)
return this.authservice.currentUser?.userName;

return '';

}
//we are telling angular that we want to render ref1 which is our template ref var on view
constructor(private router:Router,private authservice:AuthService,private viewref:ViewContainerRef){
  console.log('menu constructor')
}


  ngOnInit(): void {
    console.log('menu on init');

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

    }

    ngDoCheck(){
      console.log('doCheck of menu');
    }

    ngAfterContentInit(){

      console.log('menu content init');

    }
    ngAfterContentChecked(){
      console.log('menu content checked');
    }
    ngAfterViewInit(){
      console.log('menu view init');
      this.viewref.createEmbeddedView(this.ref1);

    }

   ngAfterViewChecked(){
    console.log('menu view checked');


   }
   greet():void{
    console.log(this.greetingc.displayMessage());
    this.pageTitle=this.greetingc.displayMessage();
   }

}
