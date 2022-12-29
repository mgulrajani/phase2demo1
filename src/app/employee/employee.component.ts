import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export class country{
  id:string='';
  name:string='';

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
export class Emp{
  id!:number;
  firstname!:string;
  lastname!:string;
  country!:string;

}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  //you have created #empForm - I want a reference here in my component
  //@ViewChild
@ViewChild('empForm',{})empForm!:NgForm;
  countries:country[]=[
    new country("1","India"),
    new country("2","Japan")
  ];
  constructor() { }
    emp!:Emp
  ngOnInit(): void {
    this.emp={
      id:1,
      firstname:'sachin',
      lastname:'mishra',
      country:'India'

    };
    setTimeout(()=>{
      this.empForm.setValue(this.emp);
    })
  }


  onSubmit(empForm:any){
   console.log(empForm.value)
  }

  reset(empForm:any) {
    empForm.resetForm();
  }
 changeCountry(){
  this.empForm.controls['country'].setValue("1");
 }
}


/*


to set the initial values in template driven form

a) create object of the interface
b) in  ngOnInit(){

  setTimeOut()    form.setValue(value)
}

if any value is remaining -- method to access it thru form.controls['username'].setValue( )
*/


//Book id ,title ,author { name ,email }, dateofpublishing--reactive form 
