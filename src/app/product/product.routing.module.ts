import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "app/products/product-add.component";
import { ProductShellComponent } from "app/products/product-shell.component";

const productRoutes: Routes = [
  { path: 'addProduct', component: ProductAddComponent }
];

@NgModule({
  imports: [

    RouterModule.forChild(productRoutes),],
  exports:[RouterModule]})
export class ProductRoutingModule{

}
