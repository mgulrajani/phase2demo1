import { Component, OnInit } from '@angular/core';
import { Category, IProduct } from './product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  pageTitle:string="Product List "
filteredProducts:IProduct[]=[];

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }
  filterValue!:string;
   products:IProduct[]=[{

    id:111,
    name:'apples',
    category:Category.fruits,

    price:180,
    image:'../../assets/images/apple.jpg',
    rating:3.5,

   },
  {

    id:112,
    name:'tomato',
    category:Category.vegetables,

    price:340,
    image:'../../assets/images/tomato.jpg',
    rating:2,
}];


   filterData(val:string){




    this.filteredProducts=this.products.filter((p)=>p.category===val);
  }


  onRatingClicked(msg:string):void{
    this.pageTitle='My Angular App ' +msg;
  }




}
