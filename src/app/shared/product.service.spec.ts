import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { inject, TestBed } from "@angular/core/testing";

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
      imports:[HttpClientTestingModule],
        providers:[ProductService],
     });
     service=TestBed.get(ProductService);

  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  })
  it('should getAllProducts',
    inject([HttpTestingController,ProductService],
      (httpMock:HttpTestingController,service:ProductService)=>{


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


      service.getProducts().subscribe(resp=>expect(items).toEqual(resp));


      const mockReq = httpMock.expectOne(service.url);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(items);

      httpMock.verify();
    }
  ));

  //using spyOn
  it('should get product by id',()=>{
      let response:IProduct;


     let item ={

      "id":111,
      "name":"apples",
      "category":Category.fruits,

      "price":180,
      "image":"../../assets/images/apple.jpg",
      "rating":3.5,
      "qty":0

     };

      const fn=spyOn(service, 'getProductById').and.returnValue(of(item));

      service.getProductById(111).subscribe(res=>{response=res;expect(response).toEqual(item);});

     expect(fn).toHaveBeenCalled();

  });
    })

