import { TestBed } from "@angular/core/testing";

import { of } from "rxjs";
import { Category, IProduct } from "src/app/products/product";
import { ProductService } from "./product.service"
/*class FakeApiService {
    // Implement the methods you want to overload here
    getProducts() {
      return of({ items: [[

        {

            "id":111,
            "name":"apples",
            "category":Category.fruits,

            "price":180,
            "image":"../../assets/images/apple.jpg",
            "rating":3.5,
            "qty":0

           },
          {

            "id":112,
            "name":"tomato",
            "category":Category.vegetables,

            "price":340,
            "image":"../../assets/images/tomato.jpg",
            "rating":2,
            "qty":0
        }]

    ] }); // * mocks the return of the real method
    }
  }*/
describe('ProductService',()=>{
    let service:ProductService;

  beforeEach(()=>{
     TestBed.configureTestingModule({
        providers:[ProductService],
     });
     service=TestBed.get(ProductService);

  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  })
  it('should getAllProducts',()=>{
    const items=[

      {

          "id":111,
          "name":"apples",
          "category":Category.fruits,

          "price":180,
          "image":"../../assets/images/apple.jpg",
          "rating":3.5,
          "qty":0

         },
        {

          "id":112,
          "name":"tomato",
          "category":Category.vegetables,

          "price":340,
          "image":"../../assets/images/tomato.jpg",
          "rating":2,
          "qty":0
      }];

      let response:IProduct[]=[];
      spyOn(service, 'getProducts').and.returnValue(of(items));

      service.getProducts().subscribe(res=>response=res);
     expect(response).toEqual(items);
     expect(service.getProducts).toHaveBeenCalled();


    })

})
