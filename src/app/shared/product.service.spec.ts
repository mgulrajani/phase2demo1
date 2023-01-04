import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";

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

    let injector: TestBed;

  let httpMock: HttpTestingController;

let  items:any[]=[];
  beforeEach(()=>{
     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
        providers:[ProductService],
     });
     service=TestBed.get(ProductService);


     injector = getTestBed();

    httpMock = injector.get(HttpTestingController);
      items=[

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



  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  })
  it('should getAllProducts',
    inject([HttpTestingController,ProductService],
      (httpMock:HttpTestingController,service:ProductService)=>{



      service.getProducts().subscribe(resp=>expect(items).toEqual(resp));


      const mockReq = httpMock.expectOne(service.url);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(items);

      httpMock.verify();
    }
  ));

  //using spyOn to test getProductById
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

   it('createProduct() should post a product and    return array of products as data',()=>{


    let item ={

      "id":113,
      "name":"mangoes",
      "category":Category.fruits,

      "price":300,
      "image":"../../assets/images/mangoes.jpg",
      "rating":4.5,
      "qty":0

     };


    let item2 ={

      "id":114,
      "name":"mangoes",
      "category":Category.fruits,

      "price":300,
      "image":"../../assets/images/mangoes.jpg",
      "rating":3.5,
      "qty":0

     };
    items =[...items,item];
     service.createProduct(item).subscribe(resp=>expect(resp).toEqual(item2) )
     expect(items.length).toEqual(2);

     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     req.flush({item });

     })

   });




