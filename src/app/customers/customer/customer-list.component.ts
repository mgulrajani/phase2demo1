
// import { Component, OnInit } from "@angular/core";

// import { Store, select } from "@ngrx/store";
// import { Observable } from "rxjs";

// import * as customerActions from "../customer/state/customer.action";
// import * as fromCustomer from "../customer/state/customer.reducer";
// import { Customer } from "../customer/customer.model";

// @Component({
//   selector: "app-customer-list",
//   templateUrl: "./customer-list.component.html",
//   styleUrls: ["./customer-list.component.css"]
// })
// export class CustomerListComponent implements OnInit {
//   customers$!: Observable<Customer[]>;
//   error$!: Observable<String>;

//   constructor(private store: Store<fromCustomer.AppState>) {}

//   ngOnInit() {
//     this.store.dispatch(new customerActions.LoadCustomers());
//     this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
//     this.error$ = this.store.pipe(select(fromCustomer.getError));
//   }

//   deleteCustomer(customer: Customer) {
//     if (confirm("Are You Sure You want to Delete the User?")) {
//       if(customer.id)
//       this.store.dispatch(new customerActions.DeleteCustomer(customer.id));
//     }
//   }

//   editCustomer(customer: Customer) {
//     if(customer.id)
//     this.store.dispatch(new customerActions.LoadCustomer(customer.id));
//   }
// }
