import { Component, OnInit } from '@angular/core';
import { Category, IProduct } from './product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
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
    image:'../../assets/images/apple.jpg'

   },
  {

    id:112,
    name:'tomato',
    category:Category.vegetables,

    price:340,
    image:'../../assets/images/tomato.jpg'

}];


   filterData(val:string){




    this.filteredProducts=this.products.filter((p)=>p.category===val);
  }






}
