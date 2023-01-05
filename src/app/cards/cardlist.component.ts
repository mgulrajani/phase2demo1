import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OnInitEffects } from '@ngrx/effects';
import { StateObservable } from '@ngrx/store/src';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'card-list',
  template: `

  <h1> Card List</h1>

      <card>
        <header #header><h1>Angular</h1></header>
      <p #p1>this is a para1</p>
      </card>

      <card>
        <header #header><h1 style="color:red;">React</h1></header>

      </card>

      <card>
        <header #header> <h1>Typescript</h1> </header>
        <p #p1>this is a para3</p>
      </card>

  `,
})
export class CardListComponent  implements OnInit{

  constructor(private http:HttpClient){}
  ngOnInit(): void {

    //unicast

    //created an Observable
    // const obs1 =new Observable((data)=>data.next(Math.random()));

    // //creating subscribers
    // obs1.subscribe(d=>console.log(d));

    // //creating another subscribe
    // obs1.subscribe(d=>console.log(d));

    const subject  =new Subject();

    subject.subscribe(d=>console.log(d));

    subject.subscribe(d=>console.log(d));

    subject.next(Math.random());


    // const data =this.http.get('/api/products');

    // data.subscribe(d=>console.log(d));

    // data.subscribe(d=>console.log(d));


    const subject1 = new Subject();
    const data = this.http.get('/api/products');
    subject1.subscribe(d=>console.log(d));
    subject1.subscribe(d=>console.log(d));

    const result = data.subscribe(subject1);
    

  }





}
