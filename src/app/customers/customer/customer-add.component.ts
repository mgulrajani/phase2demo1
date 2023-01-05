// import { Component, OnInit } from "@angular/core";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { Store, State, select } from "@ngrx/store";
// import * as customerActions from "../customer/state/customer.action";
// import * as fromCustomer from '../customer/state/customer.reducer';
// import { Customer } from "../customer/customer.model";

// @Component({
//   selector: "app-customer-add",
//   templateUrl: "./customer-add.component.html",
//   styleUrls: ["./customer-add.component.css"]
// })
// export class CustomerAddComponent implements OnInit {
//   customerForm!: FormGroup;
//    newCustomer!:Customer;
//   constructor(
//     private fb: FormBuilder,
//     private store: Store<fromCustomer.AppState>
//   ) {}

//   ngOnInit() {
//     this.customerForm = this.fb.group({
//       name: ["", Validators.required],
//       phone: ["", Validators.required],
//       address: ["", Validators.required],
//       membership: ["", Validators.required]
//     });
//   }

//   createCustomer() {

//      this.newCustomer = {

//       name: this.customerForm?.get("name")?.value,
//       phone: this.customerForm?.get("phone")?.value,
//       address: this.customerForm?.get("address")?.value,
//       membership: this.customerForm?.get("membership")?.value}


//   if(this.newCustomer){
//     this.store.dispatch(new customerActions.CreateCustomer(this.newCustomer));
//   }
//     this.customerForm.reset();
//   }
// }
