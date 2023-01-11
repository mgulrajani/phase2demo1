import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProducts, getError, getCurrentProduct } from 'app/state/products/product.selectors';
import { State } from 'app/state/products/product.state';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { Category, IProduct } from './product';
import * as ProductActions from '../state/products/product.actions'
import { Location } from '@angular/common';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  animations:[
    trigger('enlarge',[

      state('start',style({
       width:'50px' , height:'50px'
      })),

    state('end',style({
      height:'300px',width:'300px'
    })),

    // transition('start<=>end', animate('300ms ease-in',keyframes([
    //   style({opacity: 0,transform: 'translateY(-75%)',offset:0}),
    //   style({opacity: 1,transform: 'translateY(35px)',offset: .5}),
    //   style({opacity: 1,transform: 'translateY(0)',offset:1}),
    // ]))),

     //transition('start=>end',animate('1s linear')),
    // transition('start=>end',[
    //   animate('1s 3s')
    // ]),
    // transition('end=>start',[
    //   animate('1s 3s')
    // // ]),
    // ]),
    // ])]})
  ])]})
export class ProductsListComponent implements OnInit ,OnDestroy {

  //********************************For animation*********** */
       @ViewChild('img1')img1!:ElementRef;
       isHovering:boolean= false;

        //*********************** */
errorMessage:string='';
sub!:Subscription;
prod!:IProduct;
products:IProduct[]=[];
pageTitle:string="Product List "
filteredProducts:IProduct[]=[];
selectedProduct!:IProduct | null;
filterValue!:string;
href:string='';

//******************** declared below are observables for which we will use async pipe in template , no sub/unsub*/
products$!:Observable<IProduct[]>;
selectedProduct$!:Observable<any>;
errorMessage$!: Observable<string>;

//*************** */
dataReceived=this.productService.getProducts();
obsProducts$!:Observable<IProduct[]>;
@Output() OnProductSelection:EventEmitter<IProduct>=new EventEmitter<IProduct>();

  constructor(private productService:ProductService,
    private router:Router,private store:Store<State>){}

  ngOnInit(): void {
    this.href=this.router.url;
    // console.log(this.href);
    // //sub object is initialized
    //    this.obsProducts$=this.productService.getProducts();
    //    /*.subscribe(
    //      (response)=>{

    //      console.log(response);
    //      this.products=response;
    //      this.filteredProducts = this.products;

    //    },
    //    err=>{this.errorMessage=err;
    //     console.log(err);
    //    }
    //    );*/

      //  console.log(this.selectedProduct);
      //  this.productService.selectedProductChanges$.
      //  subscribe(currentProduct=>{this.selectedProduct=currentProduct;
      // });
   // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.products$ = this.store.select(getProducts);
    this.products$.subscribe(resp=>this.filteredProducts=resp);
    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductActions.loadProducts());

    // Do NOT subscribe here because it uses an async pipe
    this.selectedProduct$ = this.store.select(getCurrentProduct);

     }

     ngOnDestroy(): void {
       //this.sub.unsubscribe();
  }



   filterData(val:string){




    this.filteredProducts=this.products.filter((p)=>p.category===val);
  }


  onRatingClicked(msg:string):void{
    this.pageTitle='My Angular App ' +msg;
  }

 onSelect(p:IProduct){
  this.OnProductSelection.emit(p);
 }

newProduct():void{
   console.log('in new product');

  // this.productService.changeSelectedProduct(this.productService.newProduct());
  // console.log('back to newProduct from service ');
  this.store.dispatch(ProductActions.initializeCurrentProduct());
   this.router.navigate([this.href,'addProduct']);
}
 productSelected(product:IProduct):void{
  //this.productService.changeSelectedProduct(product);
this.store.dispatch(ProductActions.setCurrentProduct({currentProductId:product.id}));
}
  getProductById(id:number):IProduct{
    this.productService.getProductById(id).subscribe(resp=>this.prod=resp);
    return this.prod;
  }

  ///****************Animation of image */
  applyAnimation1(i: any){
  console.log('applyAnimation1')
    if(this.img1.nativeElement?.className==='hover1'){
      console.log('making to enlarge and animate')
     this.isHovering=true;}


  }

  applyAnimation2(i: any){
    console.log('applyAnimation2')
    if(this.img1.nativeElement?.className==='hover1')
    {this.isHovering=false;
    }
}

}
