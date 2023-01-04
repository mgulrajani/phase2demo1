import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';


const customerRoutes:Routes = [{path:'',component:CustomerComponent}]
@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild(customerRoutes)
  ]
})
export class CustomersModule { }
