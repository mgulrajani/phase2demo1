import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { Category, IProduct } from "src/app/products/product";

@Injectable({
    providedIn:'root'
})
export class ProductService{
   //angular DI will resolve the dependency of ProductService class on HttpClient
    //A -- B --C
    //ProductListComponent it has a dependency mentioned in the constructors
    //P roductService --constructor -- it says ProductService has  a dependency of type HttpClient

  private url="api/products.json";

  constructor(private http:HttpClient){}

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url);



  }




}
