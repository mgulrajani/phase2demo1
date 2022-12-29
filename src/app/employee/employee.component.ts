import { Component, OnInit } from '@angular/core';
export class country{
  id:string='';
  name:string='';

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  countries:country[]=[
    new country("1","India"),
    new country("2","Japan")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(empForm:any){
   console.log(empForm.value)
  }
}
