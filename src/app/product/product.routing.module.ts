import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "app/products/product-add.component";
import { ProductShellComponent } from "app/products/product-shell.component";
import { ProductsListComponent } from "app/products/products-list.component";
import { AuthGuard } from "app/user/auth-guard.service";

const productRoutes: Routes = [
  {
    path: 'addProduct', component: ProductAddComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [

    RouterModule.forChild(productRoutes),],
  exports:[RouterModule]})
export class ProductRoutingModule{

}
