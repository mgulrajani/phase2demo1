import { Component } from "@angular/core";

@Component({
selector:'app',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']

})
//this is a class( part 1)
export class AppComponent{

   //variable pageTitle of type string with initial value
    pageTitle:string=
    'My Angular App';

    name:string='OnlineRentals';

}
