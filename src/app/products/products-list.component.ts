import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'shared/product.service';
import { Category, IProduct } from './product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit ,OnDestroy {
errorMessage:string='';
sub!:Subscription;
products:IProduct[]=[];
  constructor(private productService:ProductService,){ }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  pageTitle:string="Product List "
filteredProducts:IProduct[]=[];
@Output() OnProductSelection:EventEmitter<IProduct>=new EventEmitter<IProduct>();

  ngOnInit(): void {
 //sub object is initialized
    this.sub =this.productService.getProducts().subscribe(
      (response)=>{

      console.log(response);
      this.products=response;
      this.filteredProducts = this.products;

    },
    err=>{this.errorMessage=err;
     console.log(err);
    }
    );

  }
  filterValue!:string;

  dataReceived=this.productService.getProducts();

   filterData(val:string){




    this.filteredProducts=this.products.filter((p)=>p.category===val);
  }


  onRatingClicked(msg:string):void{
    this.pageTitle='My Angular App ' +msg;
  }

 onSelect(p:IProduct){
  this.OnProductSelection.emit(p);
 }


}


/*
create  a folder api in src folder
update in angular.json ,
in the assets  add src/api

ctrl +c  to cancel previous serve
ng serve once again

copy the products array into json file

in the ProductService
add the dependency of HttpClient -
because we are using http get to get from url

url = 'api/product.json'

getProducts()
what will be the return type
this.http.get(url)--  what is the return type
whenever you call http method  --  Observable ,
if you are fetching all rows , Observable of type IProduct [] array

this.http.get(url)
==

this service method we are going to consume , ProductListComponent

createa  sub variable of type rxjs -- Subscription
ngOnInit

{

  this.sub=this.productService.getProducts().subscribe(
    next=> {},
    err=>{},
    complete=>{}
  )

ngDestroy(){

  this.sub.unsubscribe();
}


which means you will have to implement OnDestroy interface 
}

*/
