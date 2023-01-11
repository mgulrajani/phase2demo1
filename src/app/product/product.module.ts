import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from 'app/products/products-list.component';
import { ProductAddComponent } from 'app/products/product-add.component';
import { ProductShellComponent } from 'app/products/product-shell.component';
import { ProductRoutingModule } from './product.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productReducer } from 'app/state/products/product.reducer';
import { ProductEffects } from 'app/state/products/product.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from 'app/star/star.component';



@NgModule({
  declarations: [ProductsListComponent,
  ProductAddComponent,
ProductShellComponent,

    StarComponent,
],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])],
    
})
export class ProductModule { }
