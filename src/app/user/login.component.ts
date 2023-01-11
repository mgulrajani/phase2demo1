import { Component, Directive, Host, HostBinding, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user';
@Directive({
  selector:'[colorChanger]'
})
export class ColorDirective implements OnInit{
  @HostBinding('style.color')color!:string;
  ngOnInit(): void {
    this.color='blue';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.color = 'green';
    console.log("Mouse over")
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.color = 'blue';
    console.log("Mouse Leave")
  }

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users:User[]=[];
pageTitle:string='Log In';
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {this.authService.fetchAllUsers().subscribe(data=>this.users=data)}
  cancel():void{

    this.router.navigate(['welcome']);
  }
  onSubmit(loginForm:NgForm){
    if(loginForm && loginForm.valid){
      const userName = loginForm.form.value.userName;
      const password=loginForm.form.value.password;
   //this user is logged in
      this.authService.validateUser({userName,password},this.users);
console.log('after login  ')
      if(this.authService.redirectToUrl){
        this.router.navigateByUrl(this.authService.redirectToUrl);
      }
      else{
        this.router.navigate(['products']);
      }



    }

  }
}
