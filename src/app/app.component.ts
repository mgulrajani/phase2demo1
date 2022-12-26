import { Component } from "@angular/core";
import { IProduct } from "./products/product";

@Component({
selector:'app',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']

})
//this is a class( part 1)
export class AppComponent{
   cssStyle:string[]=['redborder','size30'];
   //variable pageTitle of type string with initial value
    pageTitle:string=
    'My Angular App';
    products:IProduct[]=[];


    name:string='OnlineRentals';

    onProductSelection(obj:IProduct){
        console.log(JSON.stringify(obj));
        this.products=[...this.products,obj];

    }

}
